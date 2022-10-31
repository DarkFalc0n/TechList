import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import router from "./auth";
import Post from "../models/Posts"


//craete a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});


//delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
      if (post != null){
        if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json("The post was deleted");
        } else {
            res.status(403).json("Only posts made by you can be deleted");
        }
      }
      else {
          return res.status(404).json("Post not found");
      }
  } catch (err) {
    res.status(500).json(err);
  }
});
//like a post

router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post !== null) {
            if (!post.likes.includes(req.body.userId)) {
                await post.updateOne({ $push: { likes: req.body.userId } });
                res.status(200).json("post was liked");
            } else {
                await post.updateOne({ $pull: { likes: req.body.userId } });
                res.status(200).json("post unliked");
            }
        } else {
            res.status(404).json("Post not found");
        }
    } catch (err) {
          res.status(500).json(err);
    }
});

//get post
//get timeline posts

export default router;
