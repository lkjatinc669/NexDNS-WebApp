import express from "express";

const authRouter = express.Router();

authRouter.get("/main", (req, res) => res.send(req));

export default authRouter;
