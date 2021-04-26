import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheWebPage } from './recherche-web.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheWebPageRoutingModule {}
