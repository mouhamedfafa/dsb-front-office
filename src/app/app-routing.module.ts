import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
    {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'etude',
    loadChildren: () => import('./page/etude/etude.module').then( m => m.EtudePageModule)
  },
  {
    path: 'bourse',
    loadChildren: () => import('./page/etude/bourse/bourse.module').then( m => m.BoursePageModule)
  },
  {
    path: 'banque',
    loadChildren: () => import('./page/banque/banque.module').then( m => m.BanquePageModule)
  },
  {
    path: 'sante',
    loadChildren: () => import('./page/sante/sante.module').then( m => m.SantePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
