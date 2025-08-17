const express = require("express");
const userRoutes = require("./user/routers/userRouter");
const interviewRoutes = require("./interviewSession/routers/interviewSessionRouter");
const { Connect } = require("./cofig/db");

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/interviews", interviewRoutes);

async function serverStart() {
  await Connect();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
serverStart();
