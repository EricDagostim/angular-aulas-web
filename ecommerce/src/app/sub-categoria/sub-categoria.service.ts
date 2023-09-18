import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriaService {

  constructor(
    public firebaseService: FirebaseService
  ) { }

  ref() {
    return this.firebaseService.ref().child('/sub-categoria');
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

  editar(dados: any, indice: string) {
    this.ref().child('/' + indice).update(dados)
      .then();
  }

  async getByindice(indice: string) {
    let subcategoria: any;
    await this.ref().orderByKey().equalTo(indice).once('value', (snapshot: any) => {
      subcategoria = Object.values(snapshot.val())[0];
    });
    return subcategoria;
  }

}
