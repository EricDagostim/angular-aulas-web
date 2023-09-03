import { Component } from '@angular/core';
import { FormaDePagamentoService } from '../forma-de-pagamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forma-de-pagamento-adicionar',
  templateUrl: './forma-de-pagamento-adicionar.component.html',
  styleUrls: ['./forma-de-pagamento-adicionar.component.scss']
})
export class FormaDePagamentoAdicionarComponent {

  public indice:string = '';
  public descricao:string = '';

  constructor(
    public formaDePagamentoService:FormaDePagamentoService,
    public activatedRoute:ActivatedRoute
  ){

    this.activatedRoute.params
    .subscribe(
      (params:any) => {
        if(params.indice == undefined) return;

        this.formaDePagamentoService.ref()
        .child('/' + params.indice)
        .on('value', (snapshot:any) => {
          let dado = snapshot.val();
          this.indice = params.indice;
          this.descricao = dado.descricao;
        })
      }
    )
  }

  salvar(){
    let dados = {
      descricao:this.descricao
    };

    if(this.indice == ''){
      this.formaDePagamentoService.salvar(dados);
    }
    // else{
    //   this.formaDePagamentoService.editar(this.indice,dados);
    // }
  }

}
