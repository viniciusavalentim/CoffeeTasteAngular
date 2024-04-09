import { IngredientsIceDrinks } from "./IngredientsIcedDrinks";


export interface Teas{
    id?: number;
    name: string;
    observacoes: string;
    ingredientes: IngredientsIceDrinks[];
}
