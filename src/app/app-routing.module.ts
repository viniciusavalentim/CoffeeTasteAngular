import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { EditarComponent } from './pages-adm/metodos/editarCafes/editar.component';
import { CadastroComponent } from './pages-adm/metodos/cadastro/cadastro.component';
import { CriarCafeComponent } from './pages-adm/metodos/criar-cafe/criar-cafe.component';
import { CreateComponent } from './componentes/drinks-form/create.component';
import { CreateIcedDrinksComponent } from './pages-adm/iced-drinks/create-iced-drinks/create-iced-drinks.component';
import { CreateHotDrinkComponent } from './pages-adm/hot-drinks/create-hot-drink/create-hot-drink.component';
import { UpdateIcedDrinksComponent } from './pages-adm/iced-drinks/update-iced-drinks/update-iced-drinks.component';
import { UpdateHotDrinkComponent } from './pages-adm/hot-drinks/update-hot-drink/update-hot-drink.component';
import { TeasComponent } from './pages-home/teas/teas.component';
import { CoffeeSprintsComponent } from './pages-home/coffee-sprints/coffee-sprints.component';
import { CreateTeasComponent } from './pages-adm/teas/create-teas/create-teas.component';
import { CreateCoffeeSprintsComponent } from './pages-adm/coffee-sprints/create-coffee-sprints/create-coffee-sprints.component';
import { UpdateCoffeeSprintsComponent } from './pages-adm/coffee-sprints/update-coffee-sprints/update-coffee-sprints.component';
import { UpdateTeasComponent } from './pages-adm/teas/update-teas/update-teas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'administrador', component: AdministradorComponent},
  {path: 'administrador/criarMetodo', component: CadastroComponent},
  {path: 'administrador/editarMetodo/:id', component: EditarComponent},
  {path: 'administrador/criarCafe/:id', component: CriarCafeComponent},
  {path: 'administrador/create-iced-drink', component: CreateIcedDrinksComponent},
  {path: 'administrador/create-hot-drink', component: CreateHotDrinkComponent},
  {path: 'administrador/update-iced-drink/:id', component: UpdateIcedDrinksComponent},
  {path: 'administrador/update-hot-drink/:id', component: UpdateHotDrinkComponent},
  {path: 'administrador/create-teas', component: CreateTeasComponent},
  {path: 'administrador/create-coffee-sprints', component: CreateCoffeeSprintsComponent},
  {path: 'administrador/update-teas/:id', component: UpdateTeasComponent},
  {path: 'administrador/update-coffee-sprints/:id', component: UpdateCoffeeSprintsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
