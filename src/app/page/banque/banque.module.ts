import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanquePageRoutingModule } from './banque-routing.module';

import { BanquePage } from './banque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanquePageRoutingModule
  ],
  declarations: [BanquePage]
})
export class BanquePageModule {}
