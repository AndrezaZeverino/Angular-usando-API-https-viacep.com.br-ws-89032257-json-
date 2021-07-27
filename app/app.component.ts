import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Endereco } from './modelo/endereco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click:number = 0;
  endereco:Endereco;
  constructor(private http:HttpClient){
    this.endereco = new Endereco();
  }
  // void: quando não tem retorno/não precisa retornar algo 
  clickIncrementEvent():void{
    this.click++;
  }
  retornaCep(){
    this.http.get<Endereco>('https://viacep.com.br/ws/89032257/json/').subscribe(result => {
      this.endereco = result;
    })
  }
}
