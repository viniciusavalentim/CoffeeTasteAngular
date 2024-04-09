import { ActivatedRoute, Router } from '@angular/router';
import { IceDrinksService } from './../../services/Ice-drinks.service';
import { Component, OnInit } from '@angular/core';
import { IceDrinks } from 'src/app/models/IceDrinks';

@Component({
  selector: 'app-iced-drinks',
  templateUrl: './iced-drinks.component.html',
  styleUrls: ['./iced-drinks.component.css']
})
export class IcedDrinksComponent implements OnInit{

  GetIcedDrinks?: IceDrinks[];
  revenuesIceDrinksIsVisible: boolean = false;
  iceDrinkId?: number;

  constructor( public iceDrinksService: IceDrinksService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.iceDrinksService.GetIceDrinks().subscribe(data =>{
      const dados = data.dados;
      dados.map((item) =>{
        this.iceDrinkId = item.id
      });
      this.GetIcedDrinks = dados;

    });

  };

  ShowIngredientsIcedDrinks(): boolean{
    this.revenuesIceDrinksIsVisible = true;
    return this.revenuesIceDrinksIsVisible;
  }
}
