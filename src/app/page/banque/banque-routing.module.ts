import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanquePage } from './banque.page';

const routes: Routes = [
  {
    path: '',
    component: BanquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanquePageRoutingModule {}
