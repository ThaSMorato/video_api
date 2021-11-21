import { Router } from "express";
import { SearchByIdController } from "../modules/videos/useCases/searchById/searchByIdController";
import { ListDataController } from "../modules/videos/useCases/listData/listDataController";
import { SearchByIdCacheMiddleare } from "../modules/videos/useCases/searchById/searchByIdCacheMiddleware";

const videoRouter: Router = Router();
const listDataController = new ListDataController();
const searchByIdController = new SearchByIdController();
const searchByIdCacheMiddleare = new SearchByIdCacheMiddleare();

videoRouter.get("/", listDataController.handle);
videoRouter.get("/:id", searchByIdCacheMiddleare.handle, searchByIdController.handle);

export { videoRouter };
