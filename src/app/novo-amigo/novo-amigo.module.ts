import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoAmigoPageRoutingModule } from './novo-amigo-routing.module';

import { NovoAmigoPage } from './novo-amigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoAmigoPageRoutingModule
  ],
  declarations: [NovoAmigoPage]
})
export class NovoAmigoPageModule {}
