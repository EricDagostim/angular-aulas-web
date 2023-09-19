import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { FormaDePagamentoComponent } from './forma-de-pagamento/forma-de-pagamento.component';
import { FormaDePagamentoListarComponent } from './forma-de-pagamento/forma-de-pagamento-listar/forma-de-pagamento-listar.component';
import { FormaDePagamentoAdicionarComponent } from './forma-de-pagamento/forma-de-pagamento-adicionar/forma-de-pagamento-adicionar.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';
import { SubCategoriaListarComponent } from './sub-categoria/sub-categoria-listar/sub-categoria-listar.component';
import { SubCategoriaFormComponent } from './sub-categoria/sub-categoria-form/sub-categoria-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedorListarComponent } from './fornecedor/fornecedor-listar/fornecedor-listar.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { EstadoComponent } from './estado/estado.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';
import { EstadoFormComponent } from './estado/estado-form/estado-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  {
    path: 'categoria', component: CategoriaComponent,
    children: [
      {
        path: '', redirectTo: 'listar', pathMatch: 'full'
      },
      {
        path: 'listar', component: CategoriaListarComponent
      },
      {
        path: 'adicionar', component: CategoriaFormComponent
      },
      {
        path: 'adicionar/:indice', component: CategoriaFormComponent
      }
    ]
  },
  {
    path: 'forma-de-pagamento', component: FormaDePagamentoComponent,
    children: [
      {
        path: 'listar', component: FormaDePagamentoListarComponent
      },
      {
        path: 'adicionar', component: FormaDePagamentoAdicionarComponent
      },
      {
        path: 'adicionar/:indice', component: FormaDePagamentoAdicionarComponent
      }
    ]
  },
  {
    path: 'sub-categoria',
    component: SubCategoriaComponent,
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        component: SubCategoriaListarComponent
      },
      {
        path: 'adicionar',
        component: SubCategoriaFormComponent
      },
      {
        path: 'editar/:indice',
        component: SubCategoriaFormComponent,
      }
    ]
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        component: UsuarioListarComponent
      },
      {
        path: 'adicionar',
        component: UsuarioFormComponent
      },
      {
        path: 'editar/:indice',
        component: UsuarioFormComponent,
      }
    ]
  },
  {
    path: 'produto',
    component: ProdutoComponent,
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        component: ProdutoListarComponent
      },
      {
        path: 'adicionar',
        component: ProdutoFormComponent
      },
      {
        path: 'editar/:indice',
        component: ProdutoFormComponent,
      }
    ]
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        component: ClienteListarComponent
      },
      {
        path: 'adicionar',
        component: ClienteFormComponent
      },
      {
        path: 'editar/:indice',
        component: ClienteFormComponent
      }
    ]
  },
  {
    path: 'fornecedor',
    component: FornecedorComponent,
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        component: FornecedorListarComponent
      },
      {
        path: 'adicionar',
        component: FornecedorFormComponent
      },
      {
        path: 'editar/:indice',
        component: FornecedorFormComponent
      }
    ]
  },
  {
    path: 'estado',
    component: EstadoComponent,
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        component: EstadoListarComponent
      },
      {
        path: 'adicionar',
        component: EstadoFormComponent
      },
      {
        path: 'editar/:indice',
        component: EstadoFormComponent
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
