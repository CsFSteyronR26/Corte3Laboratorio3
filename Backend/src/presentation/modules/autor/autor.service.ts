import { pool } from "../../../config/database";
import { CustomError } from "../../../domain/errors/custom.error";
import { Autor, CreateAutor, UpdateAutor } from "../../../domain/interfaces/autor.interface";
import { Course, CreateCourse } from "../../../domain/interfaces/course.interface";

export class AutorService {

    public async getAllAutors(): Promise<Autor[]> {
        const sql = `SELECT * FROM autors;`;
        const autors = await pool.query(sql);
        return autors.rows;
    }

    public async getAutorById(id: number): Promise<Autor | null> {
        const sql = `SELECT * FROM autors WHERE id = $1;`;
        const autor = (await pool.query<Autor>(sql, [id])).rows[0];
        return autor ?? null;
    }

    public async createAutor(autor: CreateAutor): Promise<Autor> {
        const sql = `
            INSERT INTO autors (
                name,
                email,
                description,
                birthdate,
                status
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [
            autor.name,
            autor.email,
            autor.description,
            autor.birthdate,
            autor.status
        ];
        const autorCreated = (await pool.query<Autor>(sql, values)).rows[0];
        if(!autorCreated) {
            throw CustomError.internalServer(`No se pudo crear el autor`);
        }
        return autorCreated;
    }

    public async updateAutor(
        id: number,
        autor: UpdateAutor
    ): Promise<Autor> {
        const existingAutor = await this.getAutorById(id);
        if(!existingAutor) {
            throw CustomError.internalServer(`No existe un autor con ese id`);
        }
        const sql = `
            UPDATE autors
            SET
                name = $1,
                email = $2,
                biography = $3
            WHERE id = $4
            RETURNING *;
        `;
        const values = [
            autor.name,
            autor.email,
            autor.description,
            autor.birthdate,
            autor.status,
            id,
        ];
        const autorUpdated = (await pool.query<Autor>(sql, values)).rows[0];
        if(!autorUpdated) {
            throw CustomError.internalServer(`No se pudo actualizar el autor`);
        }
        return autorUpdated;
    }

    public async deleteAutor(id: number): Promise<boolean> {
        const existingAutor = await this.getAutorById(id);
        if(!existingAutor) {
            throw CustomError.internalServer(`No existe un autor con ese id`);
        }
        const sql = `
            DELETE FROM autors
            WHERE id = $1
            RETURNING id;
        `;
        const autorDeleted = await pool.query(sql, [id]);
        if(!autorDeleted) {
            throw CustomError.internalServer(`No se pudo eliminar el autor`);
        }
        return autorDeleted.rowCount !== null && autorDeleted.rowCount > 0;
    }

}