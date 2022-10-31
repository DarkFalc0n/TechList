import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";


const router: express.Router = express.Router();

//update user
router.put("/:id", async (req: Request, res: Response) => {
    if (req.body.userId == req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            res.status(200).json("Account updated");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only update your account");
    }
});

//delete a user
router.delete("/:id", async (req: Request, res: Response) => {
    if (req.body.userId == req.params.id || req.body.isAdmin) {
        try {
            await User.deleteOne({_id: req.body.userId});
            res.status(200).json("Account deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only delete your account");
    }
});

//get userdata
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user?._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//following a user
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user?.followers.includes(req.body.userId)) {
                await user?.update({ $push: { followers: req.body.userId } });
                await currentUser?.update({ $push: { following: req.params.id } });
                res.status(200).json("User followed");
            } else {
                res.status(403).json("Already following");
            }
        } catch(err){
            res.status(500).json(err);
    }
    } else {
        res.status(403).json("Self follow not allowed");
    }
});

//unfollow a user
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user?.followers.includes(req.body.userId)) {
                await user?.update({ $pull: { followers: req.body.userId } });
                await currentUser?.update({ $pull: { following: req.params.id } });
                res.status(200).json("User unfollowed");
            } else {
                res.status(403).json("Not following");
            }
        } catch(err){
            res.status(500).json(err);
    }
    } else {
        res.status(403).json("Self unfollow not allowed");
    }
});


export default router;
