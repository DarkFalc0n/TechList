import express, { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";
import bcrypt from "bcrypt";

const router: express.Router = express.Router();

//Register
router.post("/signup", async (req: Request, res: Response) => {
    try {

        //generating hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        //Creating new User
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);

    } catch (err) {
        console.log(err);
    }
});

//Login
router.post('/login', async (req: Request, res: Response) => {

    try {        
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("User not found");

        const isValidPassword = await bcrypt.compare(req.body.password, user?.password);
        !isValidPassword && res.status(400).json("Invalid password");

        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    }

});

export default router;