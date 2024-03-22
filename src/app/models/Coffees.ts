import { Revenues } from "./Revenues";

export interface Coffees{
    id?: number;
    variacao: string;
    receita: Revenues | null;
}
