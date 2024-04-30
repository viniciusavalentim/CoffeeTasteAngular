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
import { CreateComponent } from './componentes/drinks-form/create.component';
import { CreateHotDrinkComponent } from './pages-adm/hot-drinks/create-hot-drink/create-hot-drink.component';
import { UpdateHotDrinkComponent } from './pages-adm/hot-drinks/update-hot-drink/update-hot-drink.component';
import { ConfirmBoxConfigModule, DialogConfigModule, NgxAwesomePopupModule, ToastNotificationConfigModule } from '@costlydeveloper/ngx-awesome-popup';
import { CreateCoffeeSprintsComponent } from './pages-adm/coffee-sprints/create-coffee-sprints/create-coffee-sprints.component';
import { UpdateCoffeeSprintsComponent } from './pages-adm/coffee-sprints/update-coffee-sprints/update-coffee-sprints.component';
import { ShowCoffeeSprintsComponent } from './pages-adm/coffee-sprints/show-coffee-sprints/show-coffee-sprints.component';
import { ShowIcedDrinksComponent } from './pages-adm/iced-drinks/show-iced-drinks/show-iced-drinks.component';
import { ShowHotDrinksComponent } from './pages-adm/hot-drinks/show-hot-drinks/show-hot-drinks.component';
import { ShowTeasComponent } from './pages-adm/teas/show-teas/show-teas.component';
import { CreateTeasComponent } from './pages-adm/teas/create-teas/create-teas.component';
import { UpdateTeasComponent } from './pages-adm/teas/update-teas/update-teas.component';
import { TeasComponent } from './pages-home/teas/teas.component';
import { CoffeeSprintsComponent } from './pages-home/coffee-sprints/coffee-sprints.component';



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
    CreateHotDrinkComponent,
    UpdateHotDrinkComponent,
    CreateCoffeeSprintsComponent,
    UpdateCoffeeSprintsComponent,
    ShowCoffeeSprintsComponent,
    ShowIcedDrinksComponent,
    ShowHotDrinksComponent,
    ShowTeasComponent,
    CreateTeasComponent,
    UpdateTeasComponent,
    TeasComponent,
    CoffeeSprintsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxAwesomePopupModule.forRoot(),
    DialogConfigModule.forRoot(),
    ConfirmBoxConfigModule.forRoot(),
    ToastNotificationConfigModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
