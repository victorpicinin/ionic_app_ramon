import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAmigoPage } from './editar-amigo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAmigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAmigoPageRoutingModule {}
