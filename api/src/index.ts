import express from "express";
import fs from "node:fs";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import router from "./routes";
import errorHandler from "./middleware/errorHandler";
import path from "path";

const PORT = process.env.PORT || 8056;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use("/api", router);
app.use("/api/uploads", express.static(path.join(__dirname, "..", "/uploads")));

app.use(express.static(path.join(__dirname, "..", "views")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
