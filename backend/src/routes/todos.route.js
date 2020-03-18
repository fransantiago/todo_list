import { Router } from "express";

import TodosController from "../controllers/todos.controller";

const routes = Router();

routes.get("/", TodosController.index);
routes.post("/", TodosController.store);
routes.put("/:id", TodosController.update);
routes.delete("/:id", TodosController.destroy);

export default routes;
