import express from "express";
import {
  netUtilBase,
  netUtilDnsServerStatus,
  netUtilPathError,
  netUtilScanDevices,
} from "../controllers/netUtilController.js";

const netUtilRouter = express.Router();

netUtilRouter.post("/", netUtilBase);
netUtilRouter.post("/all-devices", netUtilScanDevices);
netUtilRouter.post("/dns-server-status", netUtilDnsServerStatus);
netUtilRouter.use(netUtilPathError);

export default netUtilRouter;
