import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public firebaseService: FirebaseService
  ) { }

  ref() {
    return this.firebaseService.ref().child('/usuario');
  }

  salvar(dados: any){
    this.ref().push(dados)
    .then();
  }

  listar(){
    return this.ref();
  }

  exluir(indice: string){
    this.ref().child(indice).remove().then();
  }

  editar(dados:any, indice: string){
    this.ref().child(indice).update(dados).then();
  }
}
