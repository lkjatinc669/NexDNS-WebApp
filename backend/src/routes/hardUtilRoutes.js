import express from "express";
import {
  hardUtilBase,
  hardUtilPathError,
} from "../controllers/hardUtilController.js";

const hardUtilRouter = express.Router();

hardUtilRouter.post("/", hardUtilBase);
hardUtilRouter.use(hardUtilPathError);

export default hardUtilRouter;
