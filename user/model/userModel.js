const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["candidate", "recruiter", "admin"],
    default: "candidate"
  },
  tracks: {
    type: [String], 
    default: []
  },
  difficultyPreference: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "medium"
  },
  streak: {
    count: { type: Number, default: 0 },
    lastCheckIn: { type: Date, default: null }
  },
  badges: {
    type: [String], 
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
