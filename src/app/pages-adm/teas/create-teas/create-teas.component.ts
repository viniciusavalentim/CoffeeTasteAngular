import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teas } from 'src/app/models/Teas';
import { TeasService } from 'src/app/services/TeasService/teas.service';

@Component({
  selector: 'app-create-teas',
  templateUrl: './create-teas.component.html',
  styleUrls: ['./create-teas.component.css']
})
export class CreateTeasComponent implements OnInit{

  btnAction = "Cadastrar";
  btnTitle = "Criar Chás";


constructor(public teasService: TeasService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

  }

  createIcedDrink(teas: Teas)
  {
    this.teasService.CreateTeas(teas).subscribe(data=>{
      this.router.navigate(['/administrador']);
    });
  }
}
