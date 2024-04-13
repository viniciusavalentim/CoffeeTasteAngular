import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { EditarComponent } from './pages/editarCafes/editar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CriarCafeComponent } from './pages/criar-cafe/criar-cafe.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'administrador', component: AdministradorComponent},
  {path: 'administrador/criarMetodo', component: CadastroComponent},
  {path: 'administrador/editarMetodo/:id', component: EditarComponent},
  {path: 'administrador/criarCafe/:id', component: CriarCafeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
