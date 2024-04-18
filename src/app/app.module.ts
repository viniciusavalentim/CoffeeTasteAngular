import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { EditarComponent } from './pages/editarCafes/editar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MetodosFormComponent } from './componentes/metodos-form/metodos-form.component';
import { CriarCafeComponent } from './pages/criar-cafe/criar-cafe.component';
import { HotDrinksComponent } from './pages-home/hot-drinks/hot-drinks.component';
import { IcedDrinksComponent } from './pages-home/iced-drinks/iced-drinks.component';
import { CreateMetodosComponent } from './pages-adm/metodos/create-metodos/create-metodos.component';
import { UpdateMetodosComponent } from './pages-adm/metodos/update-metodos/update-metodos.component';
import { UpdateIcedDrinksComponent } from './pages-adm/iced-drinks/update-iced-drinks/update-iced-drinks.component';
import { CreateIcedDrinksComponent } from './pages-adm/iced-drinks/create-iced-drinks/create-iced-drinks.component';



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
    CreateMetodosComponent,
    UpdateMetodosComponent,
    UpdateIcedDrinksComponent,
    CreateIcedDrinksComponent,
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
