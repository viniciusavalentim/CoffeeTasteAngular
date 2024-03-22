import { Ingredients } from "./Ingredients";


export interface IceDrinks{
    id?: number;
    nome: string;
    observacoes: string;
    ingredientes: Ingredients[];
}
