import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'set-word',
    loadChildren: () => import('./set-word/set-word.module').then( m => m.SetWordPageModule)
  },
  {
    path: 'recherche-web',
    loadChildren: () => import('./recherche-web/recherche-web.module').then( m => m.RechercheWebPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
