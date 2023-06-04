import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImovelComponent } from './components/imovel/imovel.component';
import { ListagemImoveisComponent } from './components/listagem-imoveis/listagem-imoveis.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'imovel', component: ImovelComponent},
  {path: 'imoveis', component: ListagemImoveisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
