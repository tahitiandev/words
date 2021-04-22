import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetWordPage } from './set-word.page';

const routes: Routes = [
  {
    path: '',
    component: SetWordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetWordPageRoutingModule {}
