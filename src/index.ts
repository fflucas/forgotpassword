import * as cors from "cors";
import * as dotenv from "dotenv";
import * as express from "express";
import "express-async-errors";
import "reflect-metadata";
import "./database";
import { router } from "./routes";
import "./utils/container";
import AppError from "./utils/error";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    _cb: express.NextFunction
  ) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    // eslint-disable-next-line no-console
    console.error(err);

    return res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
