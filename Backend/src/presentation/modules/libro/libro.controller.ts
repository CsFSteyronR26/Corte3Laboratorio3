import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { LibroService } from "./libro.service";
import { CreateLibroDTO } from "../../../domain/dtos/create-libro.dto";
import { UpdateLibroDTO } from "../../../domain/dtos/update-libro.dto";

export class LibroController {

    private readonly libroService = new LibroService();

    getAllLibros = (req: Request, res: Response): void => {
        this.libroService.getAllLibros()
        .then((libros) => res.status(200).json(libros))
        .catch((error) => HandleError.error(error, res));
    };

    getLibroById = (req: Request, res: Response): void => {
        const id = Number(req.params.id);
        this.libroService.getLibroById(id)
        .then((libro) => res.status(200).json(libro))
        .catch((error) => HandleError.error(error, res));
    }

    createLibro = (req: Request, res: Response) => {
        const [error, createLibroDTO] = CreateLibroDTO.create(req.body);
        if (error) return res.status(400).json({ error });
        this.libroService.createLibro(createLibroDTO!)
        .then((libro) => res.status(201).json(libro))
        .catch((error) => HandleError.error(error, res));
    };

    updatelibro = (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const [error, updateLibroDTO] = UpdateLibroDTO.create(req.body);
        if (error) return res.status(400).json({ error });
        this.libroService.updateLibro(id, updateLibroDTO!)
        .then((libro) => res.status(200 ).json(libro))
        .catch((error) => HandleError.error(error, res));
    };

    deleteLibro = (req: Request, res: Response) => {
        const id = Number(req.params.id);
        this.libroService.deleteLibro(id)
        .then((result) => res.status(200).json({ result }))
        .catch((error) => HandleError.error(error, res));
    };

}