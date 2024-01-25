import express from "express";
import cors from "cors";
import { db } from "./src/shared/aplicacion/mysqlConnection";
import indexRouter from "./src/shared/infrestructura/index.router";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);

db.connect()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database: " + err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});