import { IngredientsIceDrinks } from "./IngredientsIcedDrinks";


export interface IceDrinks{
    id?: number;
    name: string;
    observacoes: string;
    ingredientes: IngredientsIceDrinks[];
}

