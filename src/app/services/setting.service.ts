import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Setting } from '../models/setting';

@Injectable({
  providedIn: 'root'
})



export class SettingService {

  constructor(private storage : Storage) {
    // this.storage.get('setting').then(s => {
    //   this.setting = s
    // })
   }

  private setting : Setting = {
    theme : true,
    nbWord : 10,
    // resultatDuJeu : {
    //   gagnant : 0,
    //   perdant : 0
    // }
  }


  getSetting(){
    return this.setting
  }

}
