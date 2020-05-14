import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { NavController, IonInput } from '@ionic/angular';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-novo-amigo',
  templateUrl: './novo-amigo.page.html',
  styleUrls: ['./novo-amigo.page.scss'],
})

export class NovoAmigoPage implements OnInit {
  usuarios: any
  constructor(private dataService: DataService,public navCtrl: NavController) { }
  @ViewChild('nome') nome:IonInput;
  @ViewChild('idade') idade:IonInput;
  @ViewChild('nivel') nivel:IonInput;
  
  ngOnInit() {
    
  }
  adicionar(){
    this.usuarios = JSON.parse(localStorage.getItem('data'));
    var amigo = 
    {
      "id": "1",
      "name": this.nome.value,
      "idade": this.idade.value,
      "amizade": this.nivel.value
    }
    this.usuarios.push(amigo)

    localStorage.setItem('data', JSON.stringify(this.usuarios))
    console.log(JSON.parse(localStorage.getItem('data')))
    this.navCtrl.navigateRoot('/amigos')
  }
}
