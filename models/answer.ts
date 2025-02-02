import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  answer: { type: String, required: true },
});

const Answer = mongoose.model("Answer", answerSchema);
export default Answer;