import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetWordPageRoutingModule } from './set-word-routing.module';

import { SetWordPage } from './set-word.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetWordPageRoutingModule
  ],
  declarations: [SetWordPage]
})
export class SetWordPageModule {}
