import { Component, OnInit } from '@angular/core';
import { Metodo } from '../models/Metodos';
import { MetodosService } from '../services/metodos.service';
import { Cafes } from '../models/Cafes';
import { ActivatedRoute, Router } from '@angular/router';
import { Receitas } from '../models/Receitas';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

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
  variacao?: string;

  quantidadeDeCafe: number = 0;


  constructor(public metodosService: MetodosService, private route: ActivatedRoute, private router: Router){}

  
    ngOnInit(): void {
      this.metodosService.GetMetodos().subscribe(data =>{
        const dados = data.dados;
        dados.map((item) =>{
        });

        this.metodos = dados;
      
      });

      this.metodosService.GetCafes().subscribe(data =>{
        const dados = data.dados;
        console.log(data)

        dados.map((item) =>{
          console.log(item)
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

    getVariacao(variacaoMetodo: string){
      this.variacao = variacaoMetodo
    }
    
    getReceitaByCafe(){
      this.idCafeGet = Number(this.idCafe);

      this.metodosService.GetReceitaByCafe(this.idCafeGet).subscribe((data) =>{
        const dados = data.dados
        this.receitaComBaseNoId = dados
        dados.map((item) =>{
          this.aux = item.quantidadeDeCafe;
          this.quantidadeDeCafe = this.aux * 2
        })
        console.log(dados);

      })

 
    }

    GetByDivision(){
      return this.metodos
    }

    isMetodosVisible: boolean = true;
    isCafesVisible: boolean = false;
    isReceitasVisible: boolean = false;
  
  
    showCategorias() {
      this.isMetodosVisible = true;
      this.isCafesVisible = false;
      this.isReceitasVisible = false;
    }
  
    showMetodos() {
      this.isMetodosVisible = true;
      this.isCafesVisible = true;
      this.isReceitasVisible = false;
    }
  
    showCafes() {
      this.isMetodosVisible = true;
      this.isCafesVisible = true;
      this.isReceitasVisible = true;
    }
  
    Limpar(){
      this.isMetodosVisible = false;
      this.isCafesVisible = false;
      this.isReceitasVisible = false;
    }




}



