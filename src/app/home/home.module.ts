import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AsesoriaModalPage } from '../modals/asesoria-modal/asesoria-modal.page';
import { AsesoriaModalPageModule } from '../modals/asesoria-modal/asesoria-modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AsesoriaModalPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
