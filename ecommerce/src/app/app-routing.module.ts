import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
 
  {path: 'categoria', component:CategoriaComponent,
    children:[
      {
        path: '', component:CategoriaListarComponent
      },
      {
        path: 'adicionar', component:CategoriaFormComponent
      },
      {
        path: 'listar', component:CategoriaListarComponent
      }
    ]
  }
  // Usar children para subrotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
