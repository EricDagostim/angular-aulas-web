import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/estado.service';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-listar',
  templateUrl: './fornecedor-listar.component.html',
  styleUrls: ['./fornecedor-listar.component.scss']
})
export class FornecedorListarComponent {
  public dados: Array<any> = [];
  private nomeEstado: string = '';

  constructor(
    public fornecedorService: FornecedorService,
    public estadoService: EstadoService,
    public route:Router
  ){}

  ngOnInit(): void {
    this.fornecedorService.listar()
    .on('value',(snapshot:any) => {

      this.dados.splice(0,this.dados.length);

      let response = snapshot.val();

      if (response == null) return;

      Object.values( response )
      .forEach(
        async (e:any,i:number) => {
          let estado:any = await this.estadoService.getByindice(e.estadoId);

          this.dados.push({
            id: e.id,
            descricao: e.descricao,
            categoria: estado.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }

  exluir(key:string, descricao:string){
    if (!confirm('Deseja realmente excluir o Fornecedor ' + descricao + '?')) return;
    this.fornecedorService.excluir(key);
  }

  editar(key:string){
    this.route.navigate(['fornecedor/editar/' + key]); 
  }

}
