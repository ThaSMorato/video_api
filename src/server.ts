import "express-async-errors";
import express from "express";
import "reflect-metadata";
import { errorHandler } from "./shared/middlewares/ErrorMiddleware";

import { router } from "./routes";

// import "./database";
import "./shared/container";

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(router);

app.use(errorHandler);
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
