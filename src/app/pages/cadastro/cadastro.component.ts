import { Component } from '@angular/core';
import { Metodo } from 'src/app/models/Metodos';
import { MetodosService } from 'src/app/services/metodos.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private metodoService: MetodosService){}

  createMetodo(metodo: Metodo)
  {
    this.metodoService.CreateMetodo(metodo).subscribe((data) =>{
      console.log("chegou?")
      console.log(data);
    })
  }
}
