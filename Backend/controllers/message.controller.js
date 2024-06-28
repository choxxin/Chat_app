import { getReceiverSocketId, io } from "../Socket/socket.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";
const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params; //Getting the id form site frontend
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
      isGroupChat: false,
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    //SOCKET IO

    // await conversation.save();
    // await newMessage.save();
    //BOTH WORKS AT THE SAME TIME
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "error in send Message controller" });
  }
};
const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;

    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
      isGroupChat: false,
    }).populate("messages"); //Not reference but actual messages
    console.log("hello");
    if (!conversation) return res.status(200).json([]); //if nothing show nothing

    const messages = conversation.messages;
    res.status(201).json(messages);
  } catch (error) {
    res.status(500).json({ error: "error in recive Message controller" });
  }
};

const deleteChat = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    let conversation;
    if (userToChatId === "meow") {
      conversation = await Conversation.findOne({ isGroupChat: true });
    }
    // Find the conversation between the two users
    else {
      conversation = await Conversation.findOne({
        participants: { $all: [senderId, userToChatId] },
        isGroupChat: false,
      });
    }

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    // Delete all messages associated with the conversation
    await Message.deleteMany({
      _id: { $in: conversation.messages },
    });

    // Optionally, delete the conversation itself
    await Conversation.deleteOne({
      _id: conversation._id,
    });

    res.status(200).json({ message: "Chat deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error in deleteChat controller" });
  }
};

const createGroupChat = async () => {
  try {
    let groupConversation = await Conversation.findOne({
      isGroupChat: true,
    });

    if (!groupConversation) {
      groupConversation = await Conversation.create({
        isGroupChat: true,
      });
    }

    return groupConversation;
  } catch (error) {
    res.send(500).json({ message: "Could create" });
  }
};
const sendGroupMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.user._id;
    const user = await User.findById(senderId, "avatar fullName");
    const avatar = user?.avatar;
    const fullName = user?.fullName;
    // const receiverId = "Group";
    let groupConversation = await createGroupChat(); // Ensure the group chat exists

    const newMessage = new Message({
      senderId,

      message,
      isGroupMessage: true,
      avatar,
      fullName,
    });

    if (newMessage) {
      groupConversation.messages.push(newMessage._id);
    }

    await Promise.all([groupConversation.save(), newMessage.save()]);

    const loggedinuser = req.user._id;
    const users = await User.find({ _id: { $ne: loggedinuser } }).select(
      "-password"
    ); //all the user except u
    // users.forEach((user) => {
    //   const receiverSocketId = getReceiverSocketId(user._id);
    //   if (receiverSocketId) {
    //     io.to(receiverSocketId).emit("groupmessage", newMessage);
    //   }
    // });

    // // Send the message to the sender separately
    // const senderSocketId = getReceiverSocketId(senderId);
    // if (senderSocketId) {
    //   io.to(senderSocketId).emit("groupmessage", populatedMessage);
    // }

    users.forEach((user) => {
      const receiverSocketId = getReceiverSocketId(user._id);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("groupmessage", newMessage);
      }
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Error in sendGroupMessage controller" });
  }
};
const getGroupMessage = async (req, res) => {
  try {
    const groupConversation = await createGroupChat(); // Ensure the group chat exists

    if (!groupConversation) return res.status(200).json([]); // If no conversation, return empty array
    // console.log("here");
    const messages = await Message.find({
      _id: { $in: groupConversation.messages },
    }).populate({
      path: "senderId",
      select: "fullName avatar",
    });
    // const messages = await Conversation.findOne({
    //   isGroupChat: true,
    // }).populate("messages");
    // console.log("here ff");
    res.status(201).json(messages);
    // console.log("here ffff");
  } catch (error) {
    res.status(500).json({ error: "Error in getGroupMessage controller" });
  }
};

export {
  sendMessage,
  getMessage,
  deleteChat,
  sendGroupMessage,
  getGroupMessage,
};
