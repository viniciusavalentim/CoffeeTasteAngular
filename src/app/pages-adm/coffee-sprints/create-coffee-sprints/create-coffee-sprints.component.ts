import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeSprints } from 'src/app/models/CoffeeSprints';
import { CoffeeSprintService } from 'src/app/services/CoffeeSprintsService/coffee-sprint.service';

@Component({
  selector: 'app-create-coffee-sprints',
  templateUrl: './create-coffee-sprints.component.html',
  styleUrls: ['./create-coffee-sprints.component.css']
})
export class CreateCoffeeSprintsComponent implements OnInit {

  btnAction = "Cadastrar";
  btnTitle = "Criar CoffeeSprints";


constructor(public coffeeSprintsService: CoffeeSprintService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

  }

  createIcedDrink(CoffeeSprints: CoffeeSprints)
  {
    this.coffeeSprintsService.CreateCoffeeSprints(CoffeeSprints).subscribe(data=>{
      this.router.navigate(['/administrador']);
    });
  }
}
