import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(
    public firebaseService: FirebaseService
  ) { }

  ref(){
    return this.firebaseService.ref().child('/fornecedor');
  }

  salvar(dados: any){
    this.ref().push(dados)
    .then();
  }

  listar(){
    return this.ref();
  }

  excluir(indice: string) {
    this.ref().child('/' + indice).remove()
    .then();
  }

  editar(dados: any, indice: string){
    this.ref().child('/' + indice).update(dados)
    .then();
  }

  async getByIndice(indice: string){
    let fornecedor: any;
    await this.ref().orderByKey().equalTo(indice).once('value', (snapshot: any) => {
      fornecedor = Object.values(snapshot.val())[0]
    })
    return fornecedor;
  }
}
