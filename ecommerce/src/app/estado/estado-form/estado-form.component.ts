import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.scss']
})
export class EstadoFormComponent {

  public descricao: string = '';
  public indice: string = '';

  constructor(
    public estadoService: EstadoService,
    public activatedRoute: ActivatedRoute
  ){
    this.activatedRoute.params
    .subscribe(
      (params:any) => {

        if(params.indice == undefined) return;
        this.estadoService.ref()
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
    if (this.indice == ''){    
      this.estadoService.salvar(dados);
    }else{
      this.estadoService.editar(this.indice, dados);
    }
  }
}