import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'game1',
    loadChildren: () => import('./game1/game1.module').then( m => m.Game1PageModule)
  },
  {
    path: 'game2',
    loadChildren: () => import('./game2/game2.module').then( m => m.Game2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
