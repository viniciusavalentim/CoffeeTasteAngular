import { Ingredientes } from "./Ingredientes";


export interface BebidasGeladas{
    id?: number;
    nome: string;
    observacoes: string;
    ingredientes: Ingredientes[];
}
