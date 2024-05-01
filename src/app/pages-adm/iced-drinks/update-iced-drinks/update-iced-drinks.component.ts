import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IceDrinks } from 'src/app/models/IceDrinks';
import { IceDrinksService } from 'src/app/services/IcedDrinksService/Ice-drinks.service';

@Component({
  selector: 'app-update-iced-drinks',
  templateUrl: './update-iced-drinks.component.html',
  styleUrls: ['./update-iced-drinks.component.css']
})

export class UpdateIcedDrinksComponent implements OnInit{
  btnAction = "Editar";
  btnTitle = "Editar Bebidas Geladas";
  icedDrink!: IceDrinks;
  Category = "icedDrink";


  constructor(private icedDrinkService: IceDrinksService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
      this.icedDrinkService.GetIcedDrinksById(id).subscribe(data=>{
        this.icedDrink = data.dados;  
        console.log(data);
      });
      
  }

  UpdateIcedDrink(icedDrink: IceDrinks)
  {
    console.log(icedDrink);
    this.icedDrinkService.UpdateIcedDrink(icedDrink).subscribe(data=>{
      this.router.navigate(['/administrador']);
    });
  }

}


