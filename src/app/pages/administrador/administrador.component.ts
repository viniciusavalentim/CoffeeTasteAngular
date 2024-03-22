import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/services/methods.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Methods } from 'src/app/models/Methods';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffees } from 'src/app/models/Coffees';
import { Revenues } from 'src/app/models/Revenues';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit{

  opcoesMetodos: boolean = true;
  aux: number = 0;
  metodos: Methods[] = [];
  metodosGeral: Methods[] = [];
  cafes: Coffees[] = [];
  cafesMetodos: Methods[] = [];
  cafesComBaseNoId: Coffees[] = [];
  receitaComBaseNoId: Revenues[] = [];
  receitaSelecionada: Revenues | null = null;
  idMetodo?: number;
  idMetodoGet?: number;
  idCafe?: number;
  idCafeGet?: number;
  idReceita?: number;

  quantidadeDeCafe: number = 0;


  constructor(public metodosService: MethodsService, public coffeeService: CoffeeService,private route: ActivatedRoute, private router: Router){}

  
    ngOnInit(): void {
      this.metodosService.GetMethods().subscribe(data =>{
        const dados = data.dados;
        dados.map((item) =>{
          this.cafes = item.cafes;
          this.idMetodo = item.id;
        });

        this.metodos = dados;
      
      });

      this.coffeeService.GetCoffees().subscribe(data =>{
        const dados = data.dados;
        dados.map((item) =>{

        });
        this.cafes = dados;
      })

    }

    GetId(metodo: Methods)
    {
      const id = metodo.id;
      this.idMetodo = id;
    }

    GetIdCafe(cafe: Coffees)
    {
      const id = cafe.id;
      this.idCafe = id;
      console.log(this.idCafe)
    }


    getCafeByMetodo(){
      this.idMetodoGet = Number(this.idMetodo);

      this.coffeeService.GetCoffeeByMethods(this.idMetodoGet).subscribe((data) =>{
        const dados = data.dados;
        this.cafesComBaseNoId = dados;
      })
    }
    
    getReceitaByCafe(){
      this.idCafeGet = Number(this.idCafe);

      this.coffeeService.GetRevenuesByCafe(this.idCafeGet).subscribe((data) =>{
        const dados = data.dados
        this.receitaComBaseNoId = dados
        console.log(dados);

      })

 
    }

    GetByDivision(){
      return this.metodos
    }

  VerOpcoesMetodos()
  {
    this.opcoesMetodos = true
  }
  Limpar()
  {
    this.opcoesMetodos = false;
  }
}
