import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { SettingService } from './services/setting.service';
import { Setting } from './models/setting';
import { Words } from './models/words';
import { SynchronisationService } from './services/synchronisation.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { UtilityService } from './services/utility.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage : Storage,
    private settingService : SettingService,
    private synchro : SynchronisationService,
    private firebase : AngularFireDatabase,
    private utility : UtilityService
    ) {
      this.initializeApp();
    }
    
    settings : Setting
    showSplash : boolean =  true


  initWords(){
    this.storage.get('words').then((wordsStorage : Words) => {
      if(!wordsStorage){
        // this.synchro.getDataSynchro()
        this.firebase.database.ref('words/').on('value',(data:DataSnapshot) => {
          const words = data.val();
          this.storage.set('words', words)
        })
      }
    })
  }

  initSettingStorage() {
    this.storage.get('setting').then(s => {
      if(!s){
        this.settings = this.settingService.getSetting()
        this.storage.set('setting', this.settings)
      }
    })
  }

  async initTheme(){
    await this.storage.get('setting').then(setting => {
      if(setting){
        if(setting.theme === true){
          document.body.setAttribute('color-theme','dark');
        }else{
          document.body.setAttribute('color-theme','light');
        }
      }else{
        document.body.setAttribute('color-theme','light');
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // init perso
      this.initSettingStorage()
      this.initTheme();
      this.initWords();
      
    }).finally(()=> {
      setTimeout(() => {
        this.showSplash = false
      }, 1000);
    })
  }
}
