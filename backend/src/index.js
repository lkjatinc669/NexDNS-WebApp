import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import baseRouter from "./routes/baseRoutes.js";

dotenv.config();

const app = express();

app.use(baseRouter);
app.use("/auth", authRouter);

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
