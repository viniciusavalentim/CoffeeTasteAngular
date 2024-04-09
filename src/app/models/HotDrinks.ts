import { IngredientsIceDrinks } from "./IngredientsIcedDrinks";


export interface Hotdrinks{
    id?: number;
    name: string;
    observacoes: string;
    ingredientes: IngredientsIceDrinks[];
}
