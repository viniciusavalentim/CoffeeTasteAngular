import { Hotdrinks } from '../../models/HotDrinks';
import { Component, OnInit, numberAttribute } from '@angular/core';
import { Methods } from '../../models/Methods';
import { MethodsService } from '../../services/MethodsService/methods.service';
import { Coffees } from '../../models/Coffees';
import { ActivatedRoute, Router } from '@angular/router';
import { Revenues } from '../../models/Revenues';
import { IceDrinks } from '../../models/IceDrinks';
import { IceDrinksService } from '../../services/IcedDrinksService/Ice-drinks.service';
import { CoffeeService } from '../../services/MethodsService/coffee.service';
import { IngredientsIceDrinks } from '../../models/IngredientsIcedDrinks';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

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
  variacao?: string;
  metodoView?: string;
  quantidadeDeCafe: number = 0;


  GetBebidasGeladas?: IceDrinks[];
  icedDrinksVisible?: boolean = false;

  revenuesIceDrinksIsVisible: boolean = false;
  IdBebidasGeladas?: number;
  idBebidasGeladasGet?: number;
  ingredients?: IngredientsIceDrinks[];

  hotDrinksVisible?: boolean = false;

  constructor(public metodosService: MethodsService,public bebidasGeladasService: IceDrinksService, public coffeeService: CoffeeService, private route: ActivatedRoute, private router: Router){}


    ngOnInit(): void {
      this.metodosService.GetMethods().subscribe(data =>{
        const dados = data.dados;
        dados.map((item) =>{
        });
        this.metodos = dados;
      });

      this.coffeeService.GetCoffees().subscribe(data =>{
        const dados = data.dados;
        console.log(data)

        dados.map((item) =>{
        });
        this.cafes = dados;
      });


    };

    GetId(metodo: Methods)
    {
      const id = metodo.id;
      this.idMetodo = id;
      this.metodoView = metodo.metodos

    }

    GetIdCafe(cafe: Coffees)
    {
      const id = cafe.id;
      this.idCafe = id;
      console.log(this.idCafe);
    }


    getCafeByMetodo(){
      this.idMetodoGet = Number(this.idMetodo);

      this.coffeeService.GetCoffeeByMethods(this.idMetodoGet).subscribe((data) =>{
        const dados = data.dados;
        this.cafesComBaseNoId = dados;
      })
    }

    getVariacao(variacaoMetodo: string){
      this.variacao = variacaoMetodo
    }

    getReceitaByCafe(){
      this.idCafeGet = Number(this.idCafe);

      this.coffeeService.GetRevenuesByCafe(this.idCafeGet).subscribe((data) =>{
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
      this.icedDrinksVisible = false;
      this.hotDrinksVisible = false
      this.revenuesIceDrinksIsVisible = false
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

    showHotDrinks(){
      this.isMetodosVisible = false;
      this.isCafesVisible = false;
      this.isReceitasVisible = false;
      this.icedDrinksVisible = false;
      this.hotDrinksVisible = true;
      this.revenuesIceDrinksIsVisible = false
    }

    showIcedDrinks(){
      this.isMetodosVisible = false;
      this.isCafesVisible = false;
      this.isReceitasVisible = false;
      this.icedDrinksVisible = true;
      this.hotDrinksVisible = false
      this.revenuesIceDrinksIsVisible = false
    }

    showRevenues(){
      this.revenuesIceDrinksIsVisible = true
    }

    limpar(){
      this.isMetodosVisible = false;
      this.isCafesVisible = false;
      this.isReceitasVisible = false;
      this.icedDrinksVisible = false;
      this.hotDrinksVisible = false;
      this.revenuesIceDrinksIsVisible = false;
    }




}

