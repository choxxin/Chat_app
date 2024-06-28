import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
      required: true,
    },
    isGroupMessage: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
    fullName: {
      type: String,
    },
  },
  //Created and updated at
  { timestamps: true }
);

const Message = new mongoose.model("Message", messageSchema);
export default Message;
