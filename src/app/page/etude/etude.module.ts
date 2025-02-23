import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtudePageRoutingModule } from './etude-routing.module';

import { EtudePage } from './etude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtudePageRoutingModule
  ],
  declarations: [EtudePage]
})
export class EtudePageModule {}
