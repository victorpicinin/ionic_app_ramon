import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoAmigoPage } from './novo-amigo.page';

const routes: Routes = [
  {
    path: '',
    component: NovoAmigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoAmigoPageRoutingModule {}
