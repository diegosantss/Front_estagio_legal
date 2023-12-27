export interface User {
    id: string;
    name: string;
    cpf: string;
    registration: string;
    email: string;
    telefone: string;
    courseStudy: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    id_institution: string | null;
  }