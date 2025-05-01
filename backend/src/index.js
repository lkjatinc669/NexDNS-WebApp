import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import baseRouter from "./routes/baseRoutes.js";
import netUtilRouter from "./routes/netUtilRoutes.js";
import hardUtilRouter from "./routes/hardUtilRoutes.js";
import { logMachine } from "./middleware/logMachine.js";
import { corsMiddleware } from "./middleware/corsMiddleware.js";
import { internetStatus } from "./network-utils/internetstatus.js";

dotenv.config();

const app = express();

app.use(logMachine);
app.use(corsMiddleware);

app.use((err, req, res, next) => {
  if (err.message.startsWith("CORS Error")) {
    return res.status(403).json({ error: err.message });
  }
  next(err); // Pass other errors down
});

app.use(baseRouter);
app.use("/auth", authRouter);
app.use("/net-utils", netUtilRouter);
app.use("/hard-utils", hardUtilRouter);

app.listen(process.env.PORT, (err) => {
  if (!err) {
    console.log(
      "DNS-Server backend running on address http://localhost:" +
        process.env.PORT
    );
  } else {
    console.log("Error while running the application");
    console.log(err);
  }
});
