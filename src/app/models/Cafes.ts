import { Receitas } from "./Receitas";

export interface Cafes{
    id?: number;
    variacao: string;
    receita: Receitas | null;
}
