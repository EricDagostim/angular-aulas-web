import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.component.html',
  styleUrls: ['./estado-listar.component.scss']
})
export class EstadoListarComponent {

  public dados: Array<any> = [];

  constructor(
    public estadoService: EstadoService,
    public route:Router
  ){ }

  ngOnInit(): void {
    this.estadoService.listar()
    .on('value', (snapshot: any) => {
      this.dados.splice(0, this.dados.length);

      let response = snapshot.val();

      if(response === null) return;

      Object.values(response)
      .forEach(
        (e:any, i: number) => {
          this.dados.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      )
    });
  }

  excluir(key: string){
    this.estadoService.excluir(key);
  }

  editar(key: string) {
    this.route.navigate(['/estado/editar/' + key]);
  }
}
