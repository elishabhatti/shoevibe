import express from "express";
import { connectDb } from "./config/DB_CONNECTION.js";

const app = express();
const PORT = process.env.PORT;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.user = req.user;
  return next();
});


app.use("/api/shoe", shoeRouter);

app.listen(PORT);