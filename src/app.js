// app.js
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Middleware
app.use(cors({origin: process.env.CORS_ORIGIN,credentials: true
}));
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());


import userRouter from "./routes/user.routes.js";

// Routes

app.use("/api/v1/users", userRouter); 




export {app};

