import { Router } from "express";
import { LibroController } from "./libro.controller";

export class LibroRoutes {

  static get routes(): Router {
    const router = Router();
    const controller = new LibroController();

    router.get("/", controller.getAllLibros);
    router.get("/:id", controller.getLibroById);
    router.post("/", controller.createLibro);
    router.put("/:id", controller.updatelibro);
    router.delete("/:id", controller.deleteLibro);

    return router;
  }
}