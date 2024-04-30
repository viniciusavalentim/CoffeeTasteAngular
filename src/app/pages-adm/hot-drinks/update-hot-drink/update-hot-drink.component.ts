import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotdrinks } from 'src/app/models/HotDrinks';
import { HotDrinksService } from 'src/app/services/HotDrinksService/hot-drinks.service';

@Component({
  selector: 'app-update-hot-drink',
  templateUrl: './update-hot-drink.component.html',
  styleUrls: ['./update-hot-drink.component.css']
})

export class UpdateHotDrinkComponent implements OnInit{
  btnAction = "Editar";
  btnTitle = "Editar Bebidas Quentes";
  hotDrink!: Hotdrinks;
  Category = "hotDrinks";


  constructor(private hotDrinkService: HotDrinksService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
      this.hotDrinkService.GetHotDrinksById(id).subscribe(data=>{
        this.hotDrink = data.dados;  
      });
      
  }

  UpdateHotDrink(hotDrink: Hotdrinks)
  {
    this.hotDrinkService.UpdateHotDrink(hotDrink).subscribe(data=>{
      this.router.navigate(['/administrador']);
    });
  }
}