const express = require("express");
const InterviewSession = require("../model/interviewModel");

const router = express.Router();
router.post("/start", async (req, res) => {
  try {
    const session = await InterviewSession.create(req.body);
    res.json(session);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const sessions = await InterviewSession.find().populate("userId");
  res.json(sessions);
});

module.exports = router;
