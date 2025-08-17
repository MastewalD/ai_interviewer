const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: {type:String},
  role: { type: String, enum: ["candidate", "admin"], default: "candidate" }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
