import { pool } from "../../../config/database";
import { CustomError } from "../../../domain/errors/custom.error";
import { Libro, CreateLibro, UpdateLibro } from "../../../domain/interfaces/libro.interface";

export class LibroService {

    public async getAllLibros(): Promise<Libro[]> {
        const sql = `SELECT * FROM libros;`;
        const libros = await pool.query(sql);
        return libros.rows;
    }

    public async getLibroById(id: number): Promise<Libro | null> {
        const sql = `SELECT * FROM libros WHERE id = $1;`;
        const libro = (await pool.query<Libro>(sql, [id])).rows[0];
        return libro ?? null;
    }

    public async createLibro(libro: CreateLibro): Promise<Libro> {
        const sql = `
            INSERT INTO libros (
                name,
                description,
                editorial,
                status
            )
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [
            libro.name,
            libro.description,
            libro.editorial,
            libro.status
        ];
        const libroCreated = (await pool.query<Libro>(sql, values)).rows[0];
        if(!libroCreated) {
            throw CustomError.internalServer(`No se pudo crear el curso`);
        }
        return libroCreated;
    }

    public async updateLibro(
        id: number,
        libro: UpdateLibro
    ): Promise<Libro> {
        const existingLibro = await this.getLibroById(id);
        if(!existingLibro) {
            throw CustomError.internalServer(`No existe un libro con ese id`);
        }
        const sql = `
            UPDATE libros
            SET
                name = $1,
                description = $2,
                editorial = $3,
                status = $4
            WHERE id = $5
            RETURNING *;
        `;
        const values = [
            libro.name,
            libro.description,
            libro.editorial,
            libro.status,
            id,
        ];
        const libroUpdated = (await pool.query<Libro>(sql, values)).rows[0];
        if(!libroUpdated) {
            throw CustomError.internalServer(`No se pudo actualizar el libro`);
        }
        return libroUpdated;
    }

    public async deleteLibro(id: number): Promise<boolean> {
        const existingLibro = await this.getLibroById(id);
        if(!existingLibro) {
            throw CustomError.internalServer(`No existe un libro con ese id`);
        }
        const sql = `
            DELETE FROM libros
            WHERE id = $1
            RETURNING id;
        `;
        const libroDeleted = await pool.query(sql, [id]);
        if(!libroDeleted) {
            throw CustomError.internalServer(`No se pudo eliminar el libro`);
        }
        return libroDeleted.rowCount !== null && libroDeleted.rowCount > 0;
    }

}