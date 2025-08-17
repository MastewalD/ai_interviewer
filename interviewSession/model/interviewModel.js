const mongoose = require("mongoose");

const interviewSessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  position: String,
  questions: [String],  
  responses: [String],  
  feedback: String,     
  score: Number
}, { timestamps: true });

module.exports = mongoose.model("InterviewSession", interviewSessionSchema);
