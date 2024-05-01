import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teas } from 'src/app/models/Teas';
import { TeasService } from 'src/app/services/TeasService/teas.service';

@Component({
  selector: 'app-update-teas',
  templateUrl: './update-teas.component.html',
  styleUrls: ['./update-teas.component.css']
})
export class UpdateTeasComponent  implements OnInit{
  btnAction = "Editar";
  btnTitle = "Editar Chás";
  teas!: Teas;
  Category = "teas";


  constructor(private teasService: TeasService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
      this.teasService.GetTeasById(id).subscribe(data=>{
        this.teas = data.dados;  
      });
      
  }

  UpdateIcedDrink(teas: Teas)
  {
    this.teasService.UpdateTeas(teas).subscribe(data=>{
      this.router.navigate(['/administrador']);
    });
  }
}
