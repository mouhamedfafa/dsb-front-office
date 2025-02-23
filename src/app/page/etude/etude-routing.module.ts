import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtudePage } from './etude.page';

const routes: Routes = [
  {
    path: '',
    component: EtudePage
  },
  {
    path: 'bourse',
    loadChildren: () => import('./bourse/bourse.module').then( m => m.BoursePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudePageRoutingModule {}
