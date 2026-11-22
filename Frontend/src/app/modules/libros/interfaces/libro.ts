export interface Libro {
  id: number;
  name: string;
  description: string;
  editorial: string;
  status: boolean;
}

export type CreateLibroRequest = Omit<Libro, "id">;

export type UpdateLibroRequest = Omit<Libro, "id">;