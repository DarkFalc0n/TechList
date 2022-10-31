import dotenv from 'dotenv';
import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";

import userrouter from "./routes/users";
import authrouter from "./routes/auth";



const app: Application = express();

dotenv.config({path: __dirname+'/.env'});

if (process.env.MONGO_URI != undefined) {
    mongoose.connect(process.env.MONGO_URI, () => {
        console.log("Connected to MongoDB Cluster");
    });
}
else {
    console.error("Couldn't connect to MongoDB");
}

app.get('/', (req: Request, res: Response) => {
    res.send("Hello backend");
});
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//routes
app.use("/api/users", userrouter);
app.use("/api/auth", authrouter);

//api listening at port 5000
app.listen(5000, () => {
    console.log("Backend server is online.");
})