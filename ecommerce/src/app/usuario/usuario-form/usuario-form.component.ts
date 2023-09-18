import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent {

  public nome: string = '';
  public email: string = '';
  public senha: string = '';
  public indice: string = '';
  public nextId: number = 0;

  constructor(
    public usuarioService: UsuarioService,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {
    this.activeRoute.params.subscribe((params: any) => {
      if (params.indice === undefined) return;

      this.usuarioService.ref().child(params.indice).on('value', (snapshot: any) => {
        let dado: any = snapshot.val();
        this.indice = params.indice;
        this.nome = dado.nome;
        this.email = dado.email;
        this.senha = dado.senha;
      });
    });
  }

  salvar(){
    if(this.nome == '') {
      document.querySelector('#nome')?.classList.add('has-errors');
      document.querySelector('#nome')?.setAttribute('tooltip', 'true');
      return;
    }

    if(this.indice === ''){
      this.usuarioService.salvar({
        id : this.nextId > 0 ? this.nextId : 1,
        nome : this.nome,
        email : this.email,
        senha : this.senha
      })
    }else{
      let dados = {
        nome : this.nome,
        email : this.email,
        senha : this.senha
      };
      this.usuarioService.editar(dados, this.indice);
    }
    this.router.navigate(['/usuario']);
  }

  ngOnInit():void{
    this.setLastId();
  }

  private setLastId(){
    this.usuarioService.listar()
    .on('value', (snapshot:any) => {
      let response = snapshot.val();

      if(response == null) return;

      Object.values (response)
      .forEach((e:any, i:number) => {
        this.nextId = e.id + 1;
      });
    })
  }
}
