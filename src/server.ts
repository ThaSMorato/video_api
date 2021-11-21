import "express-async-errors";
import express from "express";
import "reflect-metadata";
import { errorHandler } from "./shared/middlewares/ErrorMiddleware";

import { router } from "./routes";

// import "./database";
import "./shared/container";
import { EventCreateCache } from "./shared/Event/EventCreateCache";

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
  const eventCreateCache = EventCreateCache.getInstance();

  eventCreateCache.watchAll();

  console.log(`listening on port ${PORT}`);
});
