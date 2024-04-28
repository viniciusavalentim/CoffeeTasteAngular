import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { EditarComponent } from './pages-adm/metodos/editarCafes/editar.component';
import { CadastroComponent } from './pages-adm/metodos/cadastro/cadastro.component';
import { MetodosFormComponent } from './componentes/metodos-form/metodos-form.component';
import { CriarCafeComponent } from './pages-adm/metodos/criar-cafe/criar-cafe.component';
import { HotDrinksComponent } from './pages-home/hot-drinks/hot-drinks.component';
import { IcedDrinksComponent } from './pages-home/iced-drinks/iced-drinks.component';
import { UpdateIcedDrinksComponent } from './pages-adm/iced-drinks/update-iced-drinks/update-iced-drinks.component';
import { CreateIcedDrinksComponent } from './pages-adm/iced-drinks/create-iced-drinks/create-iced-drinks.component';
import { CreateComponent } from './componentes/create/create.component';
import { UpdateDrinksComponent } from './componentes/update-drinks/update-drinks.component';
import { CreateHotDrinkComponent } from './pages-adm/hot-drinks/create-hot-drink/create-hot-drink.component';
import { UpdateHotDrinkComponent } from './pages-adm/hot-drinks/update-hot-drink/update-hot-drink.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministradorComponent,
    EditarComponent,
    CadastroComponent,
    MetodosFormComponent,
    CriarCafeComponent,
    HotDrinksComponent,
    IcedDrinksComponent,
    UpdateIcedDrinksComponent,
    CreateIcedDrinksComponent,
    CreateComponent,
    UpdateDrinksComponent,
    CreateHotDrinkComponent,
    UpdateHotDrinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
