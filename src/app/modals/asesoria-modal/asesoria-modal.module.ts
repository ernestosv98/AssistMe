import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsesoriaModalPageRoutingModule } from './asesoria-modal-routing.module';

import { AsesoriaModalPage } from './asesoria-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsesoriaModalPageRoutingModule
  ],
  declarations: [AsesoriaModalPage]
})
export class AsesoriaModalPageModule {}
