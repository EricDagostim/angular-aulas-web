import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaComponent } from 'src/app/categoria/categoria.component';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubCategoriaService } from '../sub-categoria.service';


@Component({
  selector: 'app-sub-categoria-listar',
  templateUrl: './sub-categoria-listar.component.html',
  styleUrls: ['./sub-categoria-listar.component.scss']
})
export class SubCategoriaListarComponent {
    public dados: Array<any> = [];
    private descricaoCategoria:string = '';
    
    constructor(
      public subCategoriaService:SubCategoriaService,
      public categoriaService:CategoriaService,
      public router:Router
    ) { }

    ngOnInit(): void {
      this.subCategoriaService.listar()
      .on('value',(snapshot:any) => {
  
        this.dados.splice(0,this.dados.length);
  
        let response = snapshot.val();
  
        if (response == null) return;
  
        Object.values( response )
        .forEach(
          async (e:any,i:number) => {
            let categoria:any = await this.categoriaService.getByIndice(e.categoria_id);
  
            this.dados.push({
              id: e.id,
              descricao: e.descricao,
              categoria: categoria.descricao,
              indice: Object.keys(snapshot.val())[i]
            });
          }
        );
      });
    }

    exluir(key:string, descricao:string){
      if (!confirm('Deseja realmente excluir a sub-categoria ' + descricao + '?')) return;
      this.subCategoriaService.excluir(key);
    }

    editar(key:string){
      this.router.navigate(['sub-categoria/editar/' + key]); 
    }

}
