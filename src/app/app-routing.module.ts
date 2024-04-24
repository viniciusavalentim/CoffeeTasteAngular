import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { EditarComponent } from './pages-adm/metodos/editarCafes/editar.component';
import { CadastroComponent } from './pages-adm/metodos/cadastro/cadastro.component';
import { CriarCafeComponent } from './pages-adm/metodos/criar-cafe/criar-cafe.component';
import { CreateComponent } from './componentes/create/create.component';
import { CreateIcedDrinksComponent } from './pages-adm/iced-drinks/create-iced-drinks/create-iced-drinks.component';
import { CreateHotDrinkComponent } from './pages-adm/hot-drinks/create-hot-drink/create-hot-drink.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'administrador', component: AdministradorComponent},
  {path: 'administrador/criarMetodo', component: CadastroComponent},
  {path: 'administrador/editarMetodo/:id', component: EditarComponent},
  {path: 'administrador/criarCafe/:id', component: CriarCafeComponent},
  {path: 'administrador/create-iced-drink', component: CreateIcedDrinksComponent},
  {path: 'administrador/create-hot-drink', component: CreateHotDrinkComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
