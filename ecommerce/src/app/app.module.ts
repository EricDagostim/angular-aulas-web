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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
