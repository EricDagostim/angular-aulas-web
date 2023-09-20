import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/estado.service';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent {

  // Nome Fantasia</th>
  // < th scope = "col" > Razão Social < /th>
  //   < th scope = "col" > CNPJ < /th>
  //     < th scope = "col" > Contato < /th>
  //       < th scope = "col" > E - mail < /th>
  //         < th scope = "col" > Logradouro < /th>
  //           < th scope = "col" > Complemento < /th>
  //             < th scope = "col" > Bairro < /th>
  //               < th scope = "col" > Cidade < /th>
  //                 < th scope = "col" > Estado < /th>

  public nomeFantasia:string = '';
  public razaoSocial:string = '';
  public cnpj:string = '';
  public contato:string = '';
  public email:string = '';
  public logradouro:string = '';
  public complemento:string = '';
  public bairro:string = '';
  public cidade:string = '';
  
  public indice: string = '';
  public nextId: number = 0;
  public estadoId: string = '';
  public estados: Array<any> = [];

  constructor(
    public fornecedorService: FornecedorService,
    public estadoService: EstadoService,
    public activatedRoute: ActivatedRoute,
    public route: Router
  ){
    this.listarEstados();
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.indice == undefined) return;

      this.fornecedorService.ref().child('/' + params.indice).on('value', (snapshot: any) => {
        let dado: any = snapshot.val();
        this.indice = params.indice;
        this.nomeFantasia = dado.descricao;
        this.estadoId = dado.estadoId;
      });
    });
  }

  salvar() {
    if (this.estadoId == '') {
      document.querySelector('#estadoId')?.classList.add('has-errors');
      document.querySelector('#estadoId')?.setAttribute('tooltip', 'true');
      return;
    } else {
      document.querySelector('#estadoId')?.classList.remove('has-errors');
    }

    if (this.nomeFantasia == '') {
      document.querySelector('#nomeFantasia')?.classList.add('has-errors');
      document.querySelector('#nomeFantasia')?.setAttribute('tooltip', 'true');
      return;
    } else {
      document.querySelector('#nomeFantasia')?.classList.remove('has-errors');
    }

    console.log(this.estadoId)

    if (this.indice === '') {
      this.fornecedorService.salvar({
        id: this.nextId > 0 ? this.nextId : 1,
        nomeFantasia: this.nomeFantasia,
        estadoId: this.estadoId,
        razaoSocial: this.razaoSocial,
        cnpj : this.cnpj,
        contato : this.contato,
        email: this.email,
        logradouro: this.logradouro,
        complemento: this.complemento,
        bairro : this.bairro,
        

      });
    } else {
      let dados = {
        nomeFantasia: this.nomeFantasia,
        estadoId: this.estadoId,
        razaoSocial: this.razaoSocial,
        cnpj : this.cnpj,
        contato : this.contato,
        email: this.email,
        logradouro: this.logradouro,
        complemento: this.complemento,
        bairro : this.bairro,
      };
      this.fornecedorService.editar(dados, this.indice);
    }
    this.route.navigate(['/fornecedor']);
  }

  ngOnInit(): void {
    this.setLastId();
  }

  private listarEstados() {
    this.estadoService.listar().on('value', (snapshot: any) => {
      let response = snapshot.val();

      if (response == null) return;

      Object.values(response).forEach((e: any, i: number) => {
        let _indice = Object.keys(snapshot.val())[i];
        this.estados.push({
          descricao: e.descricao,
          indice: _indice
        });
      });
    });
  }

  private setLastId() {
    this.fornecedorService.listar().on('value', (snapshot: any) => {
      let response = snapshot.val();

      if (response == null) return;

      Object.values(response)
        .forEach((e: any, i: number) => {
          this.nextId = e.id + 1;          
        });
    });
  }
    
}
