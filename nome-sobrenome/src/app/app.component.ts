import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nome:string = "";
  public sobrenome:string = "";

  show():void{
    alert(this.sobrenome + " " + this.nome)
  } 
}
