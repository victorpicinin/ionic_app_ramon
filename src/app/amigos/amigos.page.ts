import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  usuarios: any;
  @ViewChild('lista') lista: IonList
  constructor(private dataService: DataService,public navCtrl: NavController) { }

  ngOnInit() {
    this.usuarios = JSON.parse(localStorage.getItem('data'));
  }

  editar( user){
    console.log('editar',user);
    this.lista.closeSlidingItems()
  }

  adicionar(){
    console.log(this.usuarios)
    this.navCtrl.navigateRoot('/novo-amigo')
  }

  deletar( user){
    console.log('deletar',user);
    this.usuarios.splice(this.usuarios.findIndex(item => item.nome === user.nome), 1)
    localStorage.setItem('data', JSON.stringify(this.usuarios))
    this.lista.closeSlidingItems()
  }

}
