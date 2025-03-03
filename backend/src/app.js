import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes Import
import userRouter from "./routes/User.route.js";
import challengeRouter from "./routes/Challenges.route.js";
import completerRouter from "./routes/Completers.route.js";
import subscriberRouter from "./routes/Subscribers.route.js";
import founderRouter from "./routes/Founder.route.js";

// Route Declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/challenges", challengeRouter);
app.use("/api/v1/completers", completerRouter);
app.use("/api/v1/subscribers", subscriberRouter);
app.use("/api/v1/founders", founderRouter);

export { app };
