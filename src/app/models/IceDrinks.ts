import { Ingredients } from "./Ingredients";


export interface IceDrinks{
    id?: number;
    name: string;
    observacoes: string;
    ingredientes: Ingredients[];
}
