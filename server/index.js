import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const PUBLIC_URL = process.env.PUBLIC_URL;

app.use(cors({ origin: [PUBLIC_URL], methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], credentials: true }));

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server telah berjalan di port ${PORT}`);
});
