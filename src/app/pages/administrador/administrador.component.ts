import { Component, OnInit } from '@angular/core';
import { MetodosService } from 'src/app/services/metodos.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Metodo } from 'src/app/models/Metodos';
import { ActivatedRoute, Router } from '@angular/router';
import { Cafes } from 'src/app/models/Cafes';
import { Receitas } from 'src/app/models/Receitas';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit{

  opcoesMetodos: boolean = true;
  aux: number = 0;
  metodos: Metodo[] = [];
  metodosGeral: Metodo[] = [];
  cafes: Cafes[] = [];
  cafesMetodos: Metodo[] = [];
  cafesComBaseNoId: Cafes[] = [];
  receitaComBaseNoId: Receitas[] = [];
  receitaSelecionada: Receitas | null = null;
  idMetodo?: number;
  idMetodoGet?: number;
  idCafe?: number;
  idCafeGet?: number;
  idReceita?: number;

  quantidadeDeCafe: number = 0;


  constructor(public metodosService: MetodosService, private route: ActivatedRoute, private router: Router){}

  
    ngOnInit(): void {
      this.metodosService.GetMetodos().subscribe(data =>{
        const dados = data.dados;
        dados.map((item) =>{
          this.cafes = item.cafes;
          this.idMetodo = item.id;
        });

        this.metodos = dados;
      
      });

      this.metodosService.GetCafes().subscribe(data =>{
        const dados = data.dados;
        dados.map((item) =>{

        });
        this.cafes = dados;
      })

    }

    GetId(metodo: Metodo)
    {
      const id = metodo.id;
      this.idMetodo = id;
    }

    GetIdCafe(cafe: Cafes)
    {
      const id = cafe.id;
      this.idCafe = id;
      console.log(this.idCafe)
    }


    getCafeByMetodo(){
      this.idMetodoGet = Number(this.idMetodo);

      this.metodosService.GetCafeByMetodo(this.idMetodoGet).subscribe((data) =>{
        const dados = data.dados;
        this.cafesComBaseNoId = dados;
      })
    }
    
    getReceitaByCafe(){
      this.idCafeGet = Number(this.idCafe);

      this.metodosService.GetReceitaByCafe(this.idCafeGet).subscribe((data) =>{
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
