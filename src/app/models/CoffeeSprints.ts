import { IngredientsIceDrinks } from "./IngredientsIcedDrinks";


export interface CoffeeSprints{
    id?: number;
    name: string;
    observacoes: string;
    ingredientes: IngredientsIceDrinks[];
}
