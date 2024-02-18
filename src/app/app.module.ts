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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministradorComponent,
    EditarComponent,
    CadastroComponent,
    MetodosFormComponent,
    CriarCafeComponent
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
