import { Router } from "express";
import { AutorController } from "./autor.controller";
import { LibroController } from "../libro/libro.controller";

export class AutorRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new AutorController();

    router.get("/", controller.getAllAutors);
    router.get("/:id", controller.getAutorById);
    router.post("/", controller.createAutor);
    router.put("/:id", controller.updateAutor);
    router.delete("/:id", controller.deleteAutor);

    return router;
  }
}