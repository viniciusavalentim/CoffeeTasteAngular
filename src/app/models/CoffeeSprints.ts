import { IngredientsIceDrinks } from "./IngredientsIcedDrinks";
import { IngredientsTeas } from "./IngredientsTeas";


export interface CoffeeSprints{
    id?: number;
    name: string;
    observacoes: string;
    ingredientes: IngredientsTeas[];
}
