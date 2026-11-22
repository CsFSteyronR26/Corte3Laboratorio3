export interface Libro {
  id: number;
  name: string;
  description: string;
  editorial: string;
  status: boolean;
}

export type CreateLibro = Omit<Libro, "id">;

export type UpdateLibro = Omit<Libro, "id">;