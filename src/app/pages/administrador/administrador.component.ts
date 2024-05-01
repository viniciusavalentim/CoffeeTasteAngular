import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/services/MethodsService/methods.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Methods } from 'src/app/models/Methods';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffees } from 'src/app/models/Coffees';
import { Revenues } from 'src/app/models/Revenues';
import { CoffeeService } from 'src/app/services/MethodsService/coffee.service';
import { IceDrinksService } from 'src/app/services/IcedDrinksService/Ice-drinks.service';
import { IceDrinks } from 'src/app/models/IceDrinks';
import { Hotdrinks } from 'src/app/models/HotDrinks';
import { HotDrinksService } from 'src/app/services/HotDrinksService/hot-drinks.service';
import { AppearanceAnimation, ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';
import { Teas } from 'src/app/models/Teas';
import { TeasService } from 'src/app/services/TeasService/teas.service';
import { CoffeeSprints } from 'src/app/models/CoffeeSprints';
import { CoffeeSprintService } from 'src/app/services/CoffeeSprintsService/coffee-sprint.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit{


  showIcedDrinks: boolean = false;
  icedDrinks!: IceDrinks[];

  showHotDrinks: boolean = false;
  hotDrinks!: Hotdrinks[];

  showTeas: boolean = false;
  teas!: Teas[];

  showCoffeeSprints: boolean = false;
  coffeeSprints!: CoffeeSprints[];



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


  constructor(public methodsService: MethodsService, public coffeeService: CoffeeService, 
    public icedDrinksService: IceDrinksService, 
    private route: ActivatedRoute, 
    private router: Router,
    private hotDrinkService: HotDrinksService,
    private teasService: TeasService,
    private coffeeSprintsService: CoffeeSprintService
  ){}


    ngOnInit(): void {
      this.methodsService.GetMethods().subscribe(data =>{
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
      });

      this.icedDrinksService.GetIcedDrinks().subscribe(data =>{
        const dados = data.dados;
        this.icedDrinks = dados;
      });

      this.methodsService.GetHotDrinks().subscribe(data =>{
        const dados = data.dados;
        this.hotDrinks = dados;
      });

      this.teasService.GetTeas().subscribe(data =>{
        const dados = data.dados;
        this.teas = dados;
      });

      this.coffeeSprintsService.GetCoffeeSprints().subscribe(data =>{
        const dados = data.dados;
        this.coffeeSprints = dados;
      });

    };

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

    DeleteIcedDrink(icedDrinks: IceDrinks)
    {
      const newConfirmBox = new ConfirmBoxInitializer();

      newConfirmBox.setTitle('Confirm Delete!!');
      newConfirmBox.setMessage('Você tem certeza que deseja excluir?');

      // Choose layout color type
      newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER, 
      animationIn: AppearanceAnimation.SLIDE_IN_UP, 
      animationOut: DisappearanceAnimation.BOUNCE_OUT,
      buttonPosition: 'center',
      });

      newConfirmBox.setButtonLabels('SIM', 'NÃO');
      newConfirmBox.openConfirmBox$().subscribe(resp => {
        if(resp.clickedButtonID == 'sim'){
          const id = Number(icedDrinks.id)
          this.icedDrinksService.DeleteIcedDrink(id).subscribe(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/administrador']);
            });
          });
        }
        else{
          console.log("nao foi")
        }
       });
    }
    DeleteHotdrink(hotDrink: Hotdrinks): void{
      const newConfirmBox = new ConfirmBoxInitializer();

        newConfirmBox.setTitle('Confirm Delete!!');
        newConfirmBox.setMessage('Você tem certeza que deseja excluir?');

        // Choose layout color type
        newConfirmBox.setConfig({
        layoutType: DialogLayoutDisplay.DANGER, 
        animationIn: AppearanceAnimation.SLIDE_IN_UP, 
        animationOut: DisappearanceAnimation.BOUNCE_OUT,
        buttonPosition: 'center',
        });

        newConfirmBox.setButtonLabels('SIM', 'NÃO');

        // Simply open the popup and observe button click
        newConfirmBox.openConfirmBox$().subscribe(resp => {
          if(resp.clickedButtonID == 'sim'){
            const id = Number(hotDrink.id)
            this.hotDrinkService.DeleteHotDrink(id).subscribe(() => {
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/administrador']);
              });
            });
          }
          else{
            console.log("nao foi")
          }
        });

    }
    DeleteTeas(teas: Teas): void{
      const newConfirmBox = new ConfirmBoxInitializer();

        newConfirmBox.setTitle('Confirm Delete!!');
        newConfirmBox.setMessage('Você tem certeza que deseja excluir?');

        // Choose layout color type
        newConfirmBox.setConfig({
        layoutType: DialogLayoutDisplay.DANGER, 
        animationIn: AppearanceAnimation.SLIDE_IN_UP, 
        animationOut: DisappearanceAnimation.BOUNCE_OUT,
        buttonPosition: 'center',
        });

        newConfirmBox.setButtonLabels('SIM', 'NÃO');

        // Simply open the popup and observe button click
        newConfirmBox.openConfirmBox$().subscribe(resp => {
          if(resp.clickedButtonID == 'sim'){
            const id = Number(teas.id)
            this.teasService.DeleteTeas(id).subscribe(() => {
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/administrador']);
              });
            });
          }
          else{
            console.log("nao foi")
          }
        });

    }
    DeleteCoffeeSprints(coffeeSprints: CoffeeSprints): void{
      const newConfirmBox = new ConfirmBoxInitializer();

        newConfirmBox.setTitle('Confirm Delete!!');
        newConfirmBox.setMessage('Você tem certeza que deseja excluir?');

        // Choose layout color type
        newConfirmBox.setConfig({
        layoutType: DialogLayoutDisplay.DANGER, 
        animationIn: AppearanceAnimation.SLIDE_IN_UP, 
        animationOut: DisappearanceAnimation.BOUNCE_OUT,
        buttonPosition: 'center',
        });

        newConfirmBox.setButtonLabels('SIM', 'NÃO');

        // Simply open the popup and observe button click
        newConfirmBox.openConfirmBox$().subscribe(resp => {
          if(resp.clickedButtonID == 'sim'){
            const id = Number(coffeeSprints.id)
            this.coffeeSprintsService.DeleteCoffeeSprints(id).subscribe(() => {
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/administrador']);
              });
            });
          }
          else{
            console.log("nao foi")
          }
        });

    }

  VerOpcoesMetodos()
  {
    this.opcoesMetodos = true;
    this.showIcedDrinks = false;
    this.showHotDrinks = false;
    this.showTeas = false;
    this.showCoffeeSprints = false;
  }

  ShowIcedDrinks(){
    this.opcoesMetodos = false;
    this.showIcedDrinks = true;
    this.showHotDrinks = false;
    this.showTeas = false;
    this.showCoffeeSprints = false;
  }

  ShowHotDrinks(){
    this.opcoesMetodos = false;
    this.showIcedDrinks = false;
    this.showHotDrinks = true;
    this.showTeas = false;
    this.showCoffeeSprints = false;
  }

  ShowTeas(){
    this.opcoesMetodos = false;
    this.showIcedDrinks = false;
    this.showHotDrinks = false;
    this.showTeas = true;
    this.showCoffeeSprints = false;
  };

  ShowCoffeeSprints(){
    this.opcoesMetodos = false;
    this.showIcedDrinks = false;
    this.showHotDrinks = false;
    this.showTeas = false;
    this.showCoffeeSprints = true;
  };

}
