import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoursePage } from './bourse.page';

const routes: Routes = [
  {
    path: '',
    component: BoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoursePageRoutingModule {}
