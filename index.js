const express = require("express")
const userRoutes = require("./user/routers/userRouter");
const interviewRoutes = require("./interviewSession/routers/interviewSessionRouter");


const PORT = 5000
const app = express()
app.use("/api/users", userRoutes);
app.use("/api/interviews", interviewRoutes);
app.listen(PORT,()=>console.log("server is running on port ",PORT))