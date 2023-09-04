import { Component } from '@angular/core';
import { FormaDePagamentoService } from '../forma-de-pagamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-de-pagamento-listar',
  templateUrl: './forma-de-pagamento-listar.component.html',
  styleUrls: ['./forma-de-pagamento-listar.component.scss']
})
export class FormaDePagamentoListarComponent {

  
  public dados: Array<any> = [];

  constructor(
    public formaDePagamentoService: FormaDePagamentoService,
    public router:Router) {

  }

  ngOnInit(): void {

    this.formaDePagamentoService.listar()
      .on('value', (snapshot: any) => {

        // Limpa variavel local com os dados
        this.dados.splice(0, this.dados.length);

        // Dados retornados do Firebase
        let response = snapshot.val();

        // Não setar valores caso não venha
        // nenhum registro
        if (response == null) return;

        // Percorre a coleção de dados 
        Object.values(response)
          .forEach(
            (e: any, i: number) => {
              // Adiciona os elementos no vetor
              // de dados
              this.dados.push({
                descricao: e.descricao,
                indice: Object.keys(snapshot.val())[i]
              });
            }
          );
      });
  }

  excluir(key: string) {
    this.formaDePagamentoService.excluir(key);
  }

  editar(key: string) {
    this
      .router
      .navigate(['/forma-de-pagamento/adicionar/' + key]);
  }


}
