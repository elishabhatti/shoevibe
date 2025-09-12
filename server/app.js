import express from "express";
import { connectDb } from "./config/DB_CONNECTION.js";
import { router } from "./routes/shoe.routes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors());

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.user = req.user;
  return next();
});

app.use("/api", router);

app.listen(PORT);
