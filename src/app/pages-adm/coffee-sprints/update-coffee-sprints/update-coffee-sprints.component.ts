import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeSprints } from 'src/app/models/CoffeeSprints';
import { CoffeeSprintService } from 'src/app/services/CoffeeSprintsService/coffee-sprint.service';

@Component({
  selector: 'app-update-coffee-sprints',
  templateUrl: './update-coffee-sprints.component.html',
  styleUrls: ['./update-coffee-sprints.component.css']
})
export class UpdateCoffeeSprintsComponent implements OnInit {
  btnAction = "Editar";
  btnTitle = "Editar Coffee Sprints";
  coffeeSprint!: CoffeeSprints;
  Category = "coffeeSprints";


  constructor(private coffeeSprintService: CoffeeSprintService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
      this.coffeeSprintService.GetCoffeeSprintsById(id).subscribe(data=>{
        this.coffeeSprint = data.dados;  
        console.log(data);
      });
      
  }

  UpdateIcedDrink(coffeeSprint: CoffeeSprints)
  {
    this.coffeeSprintService.UpdateCoffeeSprints(coffeeSprint).subscribe(data=>{
      this.router.navigate(['/administrador']);
    });
  }

}
