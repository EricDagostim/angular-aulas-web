import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class FormaDePagamentoService {

  constructor(
    public firebaseService:FirebaseService,
    public router:Router
  ) { 

  }

  ref(){
    return this.firebaseService.ref().child('/forma-de-pagamento');
  }

  salvar(dados:any){
    this.ref().push(dados).then();
  }
}
