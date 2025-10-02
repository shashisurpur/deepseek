import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    // _id: { type: String, required: true },
    name: { type: String, required: true },
    userId: { type: String, required: true },
    messages: [
        {
            role: {type: String, enum: ['user', 'assistant'], required: true},
            content: {type: String, required: true},
            timestamp: {type: Date, default: Date.now}
        }
    ]
  },
  { timestamps: true }
);

const Chat = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);

export default Chat;
