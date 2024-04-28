import { ActivatedRoute, Router } from '@angular/router';
import { IceDrinksService } from '../../services/IcedDrinksService/Ice-drinks.service';
import { Component, OnInit } from '@angular/core';
import { IceDrinks } from 'src/app/models/IceDrinks';
import { IngredientsIceDrinks as IngredientsIcedDrinks } from 'src/app/models/IngredientsIcedDrinks';

@Component({
  selector: 'app-iced-drinks',
  templateUrl: './iced-drinks.component.html',
  styleUrls: ['./iced-drinks.component.css']
})
export class IcedDrinksComponent implements OnInit{

  ingredientsIceDrinksVisible: boolean = false;
  GetIcedDrinks?: IceDrinks[];
  GetIngredientsIcedDrinks?: IngredientsIcedDrinks[];
  GetComments!: string;
  iceDrinkId?: number;


  constructor( public icedDrinksService: IceDrinksService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.icedDrinksService.GetIcedDrinks().subscribe(data =>{
      const dados = data.dados;
      dados.map((item) =>{
        this.iceDrinkId = item.id
      });
      this.GetIcedDrinks = dados;

    });
  };

  GetObservacoes(observacoes: string)
  {
    console.log(observacoes)
    this.GetComments = observacoes;
    console.log(this.GetComments)
  };

  GetIngredientsByIcedDrink(icedDrinks: IceDrinks){
    const icedDrinkId = Number(icedDrinks.id);
    this.icedDrinksService.GetIngredientsByIceDrinks(icedDrinkId).subscribe(data=>{
      const dados = data.dados;
      this.GetIngredientsIcedDrinks = dados;
    });
  };

  ShowIngredientsIcedDrinks(){
    this.ingredientsIceDrinksVisible = true;
    return this.ingredientsIceDrinksVisible;
  }
}
