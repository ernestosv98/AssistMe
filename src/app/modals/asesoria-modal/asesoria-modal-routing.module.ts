import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsesoriaModalPage } from './asesoria-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AsesoriaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsesoriaModalPageRoutingModule {}
