import { IngredientsIceDrinks } from "./IngredientsIcedDrinks";
import { IngredientsTeas } from "./IngredientsTeas";


export interface Hotdrinks{
    id?: number;
    name: string;
    observacoes: string;
    ingredientes: IngredientsTeas[];
}
