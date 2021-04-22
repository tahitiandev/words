import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Setting } from '../models/setting';
import { SynchronisationService } from '../services/synchronisation.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { Words } from '../models/words';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  darkModeBtn : boolean;
  settingStorage : Setting;
  nbWord : number;

  constructor(private storage : Storage,
              private synchronisation : SynchronisationService,
              private alertController : AlertController,
              private firebase : AngularFireDatabase) {
    this.storage.get('setting').then((setting : Setting) => {
      if(setting){
        this.settingStorage = setting

        // Init thème
        if(this.settingStorage.theme === true){
          this.darkModeBtn = true
        }else{
          this.darkModeBtn = false
        }

        // init nb word
        this.nbWord = setting.nbWord
      }else{
        console.log('Erreur d\'initialisation du setting du localstorage')
      }
    })





  }

  toggletheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
      this.storage.get('setting').then(s => {
        if(s){
          this.settingStorage = s
          this.settingStorage.theme = true
          this.storage.set('setting', this.settingStorage)
        }
      })

    }else{
      document.body.setAttribute('color-theme','light');
      this.storage.get('setting').then(s => {
        if(s){
          this.settingStorage = s
          this.settingStorage.theme = false
          this.storage.set('setting', this.settingStorage)
        }
      })

    }
  }

  async SynchroniserLesDonnees(){
    await this.synchronisation.setDataInLocalStorage()
    this.popupInformation('Les données ont bien été synchronisées')
  }

  async popupInformation(message : string){
        const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information',
      message: message,
      buttons: ['OK']
    });

    await alert.present()
  }


  async nbWordAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Saisir le nombre de mot à afficher',
      inputs: [
        {
          name: 'nbword',
          type: 'number',
          placeholder: 'Exemple : 1,5,10 ...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            
            this.storage.get('setting').then((setting : Setting) => {
              if(setting){
                this.settingStorage = setting;
                this.settingStorage.nbWord = data.nbword
                this.nbWord = data.nbword
                this.storage.set('setting',this.settingStorage)
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }



  async addDataToFirebase() {
    const words = await this.storage.get('words')
    await this.firebase.database.ref('/words').set(words)
    this.popupInformation('Les données ont bien été envoyées sur firebase')
  }

  async PASFINIaddWordNotToSyncToFirebase(){
    const words = await this.storage.get('words')
    for(let word of words){

      if(!word.syncToFirebase){
        this.firebase.list('wordsTest').push({
          anglais : {
            word : word.anglais.word,
            hide : false
          },
          francais : {
            word : word.anglais.word,
            hide : false
          },
          syncToFirebase : true
        });
      }//if
    }// for


  }
  
  getDataFromFirebase(){
    this.firebase.database.ref('/words').on('value',(data:DataSnapshot) => {
      this.storage.set('words',data.val())
      this.popupInformation('Les données ont bien été récupérées sur firebase')
    })
  }






}
