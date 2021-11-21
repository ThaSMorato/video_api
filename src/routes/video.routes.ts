import { Router } from "express";
import { SearchByIdController } from "../modules/videos/useCases/searchById/searchByIdController";
import { ListDataController } from "../modules/videos/useCases/listData/listDataController";

const videoRouter: Router = Router();
const listDataController = new ListDataController();
const searchByIdController = new SearchByIdController();

videoRouter.get("/", listDataController.handle);
videoRouter.get("/:id", searchByIdController.handle);

export { videoRouter };
