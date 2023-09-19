import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from 'src/app/fornecedor/fornecedor.service';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.scss']
})
export class EstadoFormComponent {

  public descricao: string = '';
  public indice: string = '';
  public nextId: number = 0;
  public estadoId: string = '';
  public estados: Array<any> = [];

  constructor(
    public estadoService: EstadoService,
    public forncedorService: FornecedorService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ){
    this.listarEstados();
    this.activatedRoute.params.subscribe((params:any) => {
      if(params.indice == undefined) return;

      this.estadoService.ref().child('/' + params.indice).on('value', (snapshot: any) => {
        let dado: any = snapshot.val();
        this.indice = params.indice;
        this.descricao = dado.descricao;
        this.estadoId = dado.estadoId
      });
    });
    
  }

  salvar(){
    if(this.estadoId == ''){
      document.querySelector("#estadoId")?.classList.add('has-errors');
      return;
    } else {
      document.querySelector("#estadoId")?.classList.remove('has-errors');
    }

    if(this.descricao == '') {
      document.querySelector("#estadoId")?.classList.add('has-errors');
      return;
    } else {
      document.querySelector("estadoId")?.classList.remove('has-errors');
    }

    if(this.indice === ''){
      this.estadoService.salvar({
        id: this.nextId > 0 ? this.nextId = 1,
        descricao: this.descricao,
        estadoId: this.estadoId
      });
    } else {
      let dados = {
        descricao: this.descricao,
        estadoId: this.estadoId
      };
      this.estadoService.editar(dados, this.indice);
    }
    this.router.navigate(['/estado']);
  }

  ngOnInit(): void {
    this.lastId();
  }

  private listarEstados() {
    this.estadoService.listar().on('value', (snapshot: any) => {
      let response = snapshot.val();

      if (response == null) return;

      Object.values(response).forEach((e:any, i: number) => {
        let indice = Object.keys(snapshot.val())[i];
        this.estados.push({
          descricao: e.descricao,
          indice: indice
        })
      })
    });
  }

  private lastId() {
    this.estadoService.listar().on('value', (snapshot: any) => {
      let response = snapshot.val();

      if (response == null) return;

      Object.values(response)
        .forEach((e: any, i: number) => {
          this.nextId = e.id + 1;          
        });
    });
  }
}
