import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  attributes: {
    input: { type: mongoose.Schema.Types.Mixed, required: true }, // Assuming "input" is an object
    decision: { type: String, required: true },
    meetsConfidence: { type: Boolean, required: true },
    model: { type: String, required: true },
    timestamp: { type: Date, required: true },
    reasons: { type: [mongoose.Schema.Types.Mixed], required: true }, // Assuming "reasons" is an array
    confidence: { type: Number, required: true }
  },
  id: { type: String, required: true, unique: true },
  type: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Answer || mongoose.model("Answer", answerSchema);