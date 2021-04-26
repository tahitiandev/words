import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheWebPageRoutingModule } from './recherche-web-routing.module';

import { RechercheWebPage } from './recherche-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheWebPageRoutingModule
  ],
  declarations: [RechercheWebPage]
})
export class RechercheWebPageModule {}
