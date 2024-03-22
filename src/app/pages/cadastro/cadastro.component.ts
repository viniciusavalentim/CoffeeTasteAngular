import { Component } from '@angular/core';
import { Methods } from 'src/app/models/Methods';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private metodoService: MethodsService){}

  createMetodo(metodo: Methods)
  {
    this.metodoService.CreateMethods(metodo).subscribe((data) =>{
      console.log("chegou?")
      console.log(data);
    })
  }
}
