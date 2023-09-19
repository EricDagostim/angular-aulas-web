import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { FormsModule } from '@angular/forms';
import { FormaDePagamentoComponent } from './forma-de-pagamento/forma-de-pagamento.component';
import { FormaDePagamentoAdicionarComponent } from './forma-de-pagamento/forma-de-pagamento-adicionar/forma-de-pagamento-adicionar.component';
import { FormaDePagamentoListarComponent } from './forma-de-pagamento/forma-de-pagamento-listar/forma-de-pagamento-listar.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';
import { SubCategoriaFormComponent } from './sub-categoria/sub-categoria-form/sub-categoria-form.component';
import { SubCategoriaListarComponent } from './sub-categoria/sub-categoria-listar/sub-categoria-listar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { EstadoComponent } from './estado/estado.component';
import { EstadoFormComponent } from './estado/estado-form/estado-form.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { FornecedorListarComponent } from './fornecedor/fornecedor-listar/fornecedor-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    CategoriaFormComponent,
    FormaDePagamentoComponent,
    FormaDePagamentoAdicionarComponent,
    FormaDePagamentoListarComponent,
    SubCategoriaComponent,
    SubCategoriaFormComponent,
    SubCategoriaListarComponent,
    UsuarioComponent,
    UsuarioFormComponent,
    UsuarioListarComponent,
    ProdutoComponent,
    ProdutoFormComponent,
    ProdutoListarComponent,
    ClienteComponent,
    ClienteFormComponent,
    ClienteListarComponent,
    EstadoComponent,
    EstadoFormComponent,
    EstadoListarComponent,
    FornecedorComponent,
    FornecedorFormComponent,
    FornecedorListarComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAf9CDwsnK_ntlzri6qATskVBWOO0agXzs",
        authDomain: "ecommerce-ba842.firebaseapp.com",
        projectId: "ecommerce-ba842",
        storageBucket: "ecommerce-ba842.appspot.com",
        messagingSenderId: "214254041174",
        appId: "1:214254041174:web:a4b03390d4d11b164463f7",
        measurementId: "G-1FQFWLGMX1"
      }
    ),
    AngularFireStorageModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
