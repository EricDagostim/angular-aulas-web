import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(
    public firebaseService: FirebaseService
  ) { }

  ref() {
    return this.firebaseService.ref().child('/estado');
  }

  salvar(dados: any) {
    this.ref().push(dados)
      .then();
  }

  listar() {
    return this.ref();
  }

  excluir(indice: string) {
    this.ref().child('/' + indice).remove()
      .then();
  }

  editar(indice: string, dados: any) {
    this.ref().child('/' + indice).update(dados)
      .then();
  }

  async getByindice(indice: string) {
    let estado: any;
    await this.ref().orderByKey().equalTo(indice).once('value', (snapshot: any) => {
      estado = Object.values(snapshot.val())[0];
    });
    return estado;
  }
}
