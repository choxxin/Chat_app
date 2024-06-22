import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params; //Getting the id form site frontend
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
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
    }).populate("messages"); //Not reference but actual messages

    if (!conversation) return res.status(200).json([]); //if nothing show nothing

    const messages = conversation.messages;
    res.status(201).json(messages);
  } catch (error) {
    res.status(500).json({ error: "error in recive Message controller" });
  }
};

export { sendMessage, getMessage };
