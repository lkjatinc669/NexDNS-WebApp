// middleware/corsMiddleware.js
import cors from "cors";

const allowedOrigins = [
  "http://localhost:6991",
  "http://127.0.0.1:6991",
  // Add more origins here if needed
];

const corsOptionsDelegate = (req, callback) => {
  const origin = req.header("Origin");

  if (!origin || allowedOrigins.includes(origin)) {
    callback(null, {
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    });
  } else {
    const msg = `CORS Error: Origin ${origin} is not allowed by CORS policy.`;
    callback(new Error(msg), {
      origin: false,
    });
  }
};

export const corsMiddleware = cors(corsOptionsDelegate);
