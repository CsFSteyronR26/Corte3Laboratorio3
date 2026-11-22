export interface Autor {
  id: number;
  name: string;
  email: string;
  description: string;
  birthdate: string;
  status: boolean;
}

export type CreateAutorRequest = Omit<Autor, "id">;

export type UpdateAutorRequest = Omit<Autor, "id">;