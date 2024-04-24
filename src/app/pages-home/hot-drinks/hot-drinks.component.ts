import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotdrinks } from 'src/app/models/HotDrinks';
import { IngredientsHotDrinks } from 'src/app/models/IngredientsHotDrinks';
import { MethodsService } from 'src/app/services/MethodsService/methods.service';

@Component({
  selector: 'app-hot-drinks',
  templateUrl: './hot-drinks.component.html',
  styleUrls: ['./hot-drinks.component.css']
})
export class HotDrinksComponent {
  ingredientsHotDrinksVisible: boolean = false;
  GetHotDrinks?: Hotdrinks[];
  GetIngredientsHotDrinks?: IngredientsHotDrinks[];
  GetComments!: string;
  hotDrinkId?: number;


  constructor( public icedDrinksService: MethodsService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.icedDrinksService.GetHotDrinks().subscribe(data =>{
      const dados = data.dados;
      dados.map((item) =>{
        this.hotDrinkId = item.id
      });
      this.GetHotDrinks = dados;

    });
  };

  GetObservacoes(observacoes: string)
  {
    this.GetComments = observacoes;
  };

  GetIngredientsByHotDrink(hotDrinks: Hotdrinks){
    const icedDrinkId = Number(hotDrinks.id);
    this.icedDrinksService.GetIngredientsByHotDrinks(icedDrinkId).subscribe(data=>{
      const dados = data.dados;
      this.GetIngredientsHotDrinks = dados;
    });
  };

  ShowIngredientsHotDrinks(){
    this.ingredientsHotDrinksVisible = true;
    return this.ingredientsHotDrinksVisible;
  }
}
