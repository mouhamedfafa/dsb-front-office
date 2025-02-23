import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoursePageRoutingModule } from './bourse-routing.module';

import { BoursePage } from './bourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoursePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BoursePage]
})
export class BoursePageModule {}
