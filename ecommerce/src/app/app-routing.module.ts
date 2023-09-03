import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { FormaDePagamentoComponent } from './forma-de-pagamento/forma-de-pagamento.component';
import { FormaDePagamentoListarComponent } from './forma-de-pagamento/forma-de-pagamento-listar/forma-de-pagamento-listar.component';
import { FormaDePagamentoAdicionarComponent } from './forma-de-pagamento/forma-de-pagamento-adicionar/forma-de-pagamento-adicionar.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
 
  {path: 'categoria', component:CategoriaComponent,
    children:[
      {
        path: '', redirectTo:'listar', pathMatch:'full'
      },
      {
        path: 'listar', component:CategoriaListarComponent
      },
      {
        path: 'adicionar', component:CategoriaFormComponent
      },
      {
        path: 'adicionar/:indice', component:CategoriaFormComponent
      }
    ]
  },
  {path: 'forma-de-pagamento', component:FormaDePagamentoComponent,
children:[
  {
    path: 'listar', component:FormaDePagamentoListarComponent
  },
  {
    path: 'adicionar', component:FormaDePagamentoAdicionarComponent
  }
]}
  // Usar children para subrotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
