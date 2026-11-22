export interface Autor {
  id: number;
  name: string;
  email: string;
  description: string;
  birthdate: Date;
  status: boolean;
}

export type CreateAutor = Omit<Autor, "id">;

export type UpdateAutor = Omit<Autor, "id">;