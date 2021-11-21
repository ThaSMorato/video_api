import { Router } from "express";
import { videoRouter } from "./video.routes";

const router = Router();

router.use("/videos", videoRouter);

export { router };
