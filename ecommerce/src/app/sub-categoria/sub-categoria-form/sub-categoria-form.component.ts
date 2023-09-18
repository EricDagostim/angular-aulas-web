import { Component } from '@angular/core';
import { SubCategoriaService } from '../sub-categoria.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-categoria-form',
  templateUrl: './sub-categoria-form.component.html',
  styleUrls: ['./sub-categoria-form.component.scss']
})
export class SubCategoriaFormComponent {

  public descricao: string = '';
  public indice: string = '';
  public nextId: number = 0;
  public categoria_id: string = '';
  public categorias: Array<any> = [];

  constructor(
    public subcategoriaService: SubCategoriaService,
    public categoriaService: CategoriaService,
    public activated_route: ActivatedRoute,
    public router: Router
  ) {

    this.listarSelectCategorias();
    this.activated_route.params.subscribe((params: any) => {
      if (params.indice == undefined) return;

      this.subcategoriaService.ref().child('/' + params.indice).on('value', (snapshot: any) => {
        let dado: any = snapshot.val();
        this.indice = params.indice;
        this.descricao = dado.descricao;
        this.categoria_id = dado.categoria_id;
      });
    });
  }

  salvar() {
    if (this.categoria_id == '') {
      document.querySelector('#categoria_id')?.classList.add('has-errors');
      document.querySelector('#categoria_id')?.setAttribute('tooltip', 'true');
      return;
    } else {
      document.querySelector('#categoria_id')?.classList.remove('has-errors');
    }

    if (this.descricao == '') {
      document.querySelector('#descricao')?.classList.add('has-errors');
      document.querySelector('#descricao')?.setAttribute('tooltip', 'true');
      return;
    } else {
      document.querySelector('#descricao')?.classList.remove('has-errors');
    }

    if (this.indice === '') {
      this.subcategoriaService.salvar({
        id: this.nextId > 0 ? this.nextId : 1,
        descricao: this.descricao,
        categoria_id: this.categoria_id
      });
    } else {
      let dados = {
        descricao: this.descricao,
        categoria_id: this.categoria_id
      };
      this.subcategoriaService.editar(dados, this.indice);
    }
    this.router.navigate(['/sub-categoria']);
  }

  ngOnInit(): void {
    this.setLastId();
  }

  private listarSelectCategorias() {
    this.categoriaService.listar().on('value', (snapshot: any) => {
      let response = snapshot.val();

      if (response == null) return;

      Object.values(response).forEach((e: any, i: number) => {
        let _indice = Object.keys(snapshot.val())[i];
        this.categorias.push({
          descricao: e.descricao,
          indice: _indice
        });
      });
    });
  }

  private setLastId() {
    this.subcategoriaService.listar().on('value', (snapshot: any) => {
      let response = snapshot.val();

      if (response == null) return;

      Object.values(response)
        .forEach((e: any, i: number) => {
          this.nextId = e.id + 1;          
        });
    });
  }

}
