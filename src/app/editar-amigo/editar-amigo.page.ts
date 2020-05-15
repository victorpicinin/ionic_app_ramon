import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-amigo',
  templateUrl: './editar-amigo.page.html',
  styleUrls: ['./editar-amigo.page.scss'],
})
export class EditarAmigoPage implements OnInit {
  amigo: any
  constructor() { }

  ngOnInit() {
    console.log(this.amigo)
  }

  amigo_editado(ref){
    this.amigo = ref
  }

}
