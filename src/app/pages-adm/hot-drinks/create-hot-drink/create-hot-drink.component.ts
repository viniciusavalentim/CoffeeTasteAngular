import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotdrinks } from 'src/app/models/HotDrinks';
import { HotDrinksService } from 'src/app/services/HotDrinksService/hot-drinks.service';

@Component({
  selector: 'app-create-hot-drink',
  templateUrl: './create-hot-drink.component.html',
  styleUrls: ['./create-hot-drink.component.css']
})
export class CreateHotDrinkComponent implements OnInit {
  btnAction = "Cadastrar";
  btnTitle = "Criar Bebidas Quentes";


  constructor(private hotDrinkService: HotDrinksService, private router: Router){};

  ngOnInit(): void {
  }

  CreateHotDrink(hotDrink: Hotdrinks){
    this.hotDrinkService.CreateHotDrinks(hotDrink).subscribe(data =>{
      this.router.navigate(['/administrador']);
    });
  }
}
