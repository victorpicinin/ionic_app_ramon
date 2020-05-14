import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAmigoPageRoutingModule } from './editar-amigo-routing.module';

import { EditarAmigoPage } from './editar-amigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAmigoPageRoutingModule
  ],
  declarations: [EditarAmigoPage]
})
export class EditarAmigoPageModule {}
