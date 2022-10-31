import express, { Request, Response } from "express";

const router: express.Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("hey user");
})

export default router;
