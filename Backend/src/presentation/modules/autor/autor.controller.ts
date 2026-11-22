import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { AutorService } from "./autor.service";
import { CreateAutorDTO } from "../../../domain/dtos/create-autor.dto";
import { UpdateAutorDTO } from "../../../domain/dtos/update-autor.dto";

export class AutorController {

    private readonly autorService = new AutorService();

    getAllAutors = (req: Request, res: Response): void => {
        this.autorService.getAllAutors()
        .then((autors) => res.status(200).json(autors))
        .catch((error) => HandleError.error(error, res));
    };

    getAutorById = (req: Request, res: Response): void => {
        const id = Number(req.params.id);
        this.autorService.getAutorById(id)
        .then((autor) => res.status(200).json(autor))
        .catch((error) => HandleError.error(error, res));
    }

    createAutor = (req: Request, res: Response) => {
        const [error, createAutorDTO] = CreateAutorDTO.create(req.body);
        if (error) return res.status(400).json({ error });
        this.autorService.createAutor(createAutorDTO!)
        .then((autor) => res.status(201).json(autor))
        .catch((error) => HandleError.error(error, res));
    };

    updateAutor = (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const [error, updateAutorDTO] = UpdateAutorDTO.create(req.body);
        if (error) return res.status(400).json({ error });
        this.autorService.updateAutor(id, updateAutorDTO!)
        .then((autor) => res.status(200 ).json(autor))
        .catch((error) => HandleError.error(error, res));
    };

    deleteAutor = (req: Request, res: Response) => {
        const id = Number(req.params.id);
        this.autorService.deleteAutor(id)
        .then((result) => res.status(200).json({ result }))
        .catch((error) => HandleError.error(error, res));
    };

}