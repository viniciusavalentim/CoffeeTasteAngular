import { IngredientsIceDrinks } from "./IngredientsIcedDrinks";
import { IngredientsTeas } from "./IngredientsTeas";


export interface Teas{
    id?: number;
    name: string;
    observacoes: string;
    ingredientes: IngredientsTeas[];
}
