import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IceDrinks } from 'src/app/models/IceDrinks';
import { IceDrinksService } from 'src/app/services/IcedDrinksService/Ice-drinks.service';

@Component({
  selector: 'app-create-iced-drinks',
  templateUrl: './create-iced-drinks.component.html',
  styleUrls: ['./create-iced-drinks.component.css']
})
export class CreateIcedDrinksComponent implements OnInit {

  btnAction = "Cadastrar";
  btnTitle = "Criar Bebidas Geladas";


constructor(public iceDrink: IceDrinksService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

  }

  createIcedDrink(icedDrink: IceDrinks)
  {
    this.iceDrink.CreateIcedDrinks(icedDrink).subscribe(data=>{
      this.router.navigate(['/administrador']);
    });
  }
}

