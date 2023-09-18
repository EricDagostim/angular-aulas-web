import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubCategoriaService } from 'src/app/sub-categoria/sub-categoria.service';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.scss']
})
export class ProdutoListarComponent {

  public dados:Array<any> = [];

  constructor(
    public categoriaService: CategoriaService,
    public subCategoriaService:SubCategoriaService,
    public produtoService:ProdutoService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.produtoService.listar()
    .on('value',(snapshot:any) => {

      this.dados.splice(0,this.dados.length);

      let response = snapshot.val();

      if (response == null) return;

      Object.values( response )
      .forEach(
        async (e:any,i:number) => {
          let categoria:any = await this.categoriaService.getByIndice(e.categoria_id);
          let subcategoria:any = await this.subCategoriaService.getByindice(e.subcategoria_id);

          this.dados.push({
            id: e.id,
            nome: e.nome,
            categoria: categoria.nome,
            subcategoria: subcategoria.nome,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }

  excluir(key:string, nome:string) {
    if(confirm("Deseja realmente excluir o produto \"" + nome + "\"?")) {
      this.produtoService.excluir(key);
    }
  }

  editar(key:string) {
    this.router.navigate(['/produto/editar/' + key]);
  }
}