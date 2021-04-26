import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { NgForm } from '@angular/forms';
import { NavController, AlertController, AngularDelegate } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {

  words : any[]
  hideAnglais : boolean = false
  hideFrancais : boolean = false
  index:number

  constructor(private storageService : StorageService,
              private navigate : NavController,
              private alertController : AlertController,
              private storage : Storage) {
                this.initWord()
              }

  ngOnInit(){
    this.initWord()
  }

  async initWord(){
    const words = await this.storage.get('words')
    this.words = words
  }

  async supprimeUnMot(index:number){
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'Etes-vous sur de vouloir supprimer le mot ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Supprimer',
          handler: () => {
            this.storageService.deleteWord(index)
            this.initWord()
          }
        }
      ]
    });

    await alert.present();

  }//supprimeUnMot

  async ajouterUnMot() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ajouter de nouveau mots',
      inputs: [
        {
          name: 'francais',
          type: 'text',
          placeholder: 'Saisir le mot francais'
        },
        {
          name: 'anglais',
          type: 'text',
          placeholder: 'Saisir le mot anglais'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {  
          text: 'Valider',
          handler: (data) => {

            this.storageService.setStorage(data.francais, data.anglais).then(s => this.words = s)
          }
        }
      ]
    });

    await alert.present();
  }
  async editUnMot(index : number, francais:string, anglais:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ajouter de nouveau mots',
      inputs: [
        {
          name: 'francais',
          type: 'text',
          value: francais,
          placeholder: 'Saisir le mot francais'
        },
        {
          name: 'anglais',
          type: 'text',
          value: anglais,
          placeholder: 'Saisir le mot anglais'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Valider',
          handler: (data) => {
            this.storageService.editWord(index, data.francais, data.anglais).then(s => this.words = s)
          }
        }
      ]
    });

    await alert.present();
  }//editUnMot

  deleteWord(){
    return this.deleteWord()
  }//deleteWord

  goToSetWordPage(){
    this.navigate.navigateForward('tabs/tab1/set-word')
  }//goToSetWordPage

  toggleHideWord(index:number, langue:string){
    if(langue == 'francais'){
      this.storageService.afficherMasquerUnMotFrancais(index).then(s => this.words = s)
    }else{
      this.storageService.afficherMasquerUnMotAnglais(index).then(s => this.words = s)
    }
  }//toggleHideWord

  toutAfficherAnglais(){
    this.storageService.toutAfficherLesMotsAnglais().then(s => this.words = s)
    this.hideAnglais = false;
  }//toutAfficherAnglais
  
  toutAfficherFrancais(){
    this.storageService.toutAfficherLesMotsFrancais().then(s => this.words = s)
    this.hideFrancais = false
  }//toutAfficherFrancais

  toutMasquerAnglais(){
    this.storageService.toutMasquerLesMotsAnglais().then(s => this.words = s)
    this.hideAnglais = true;
  }//toutMasquerAnglais
  
  toutMasquerFrancais(){
    this.storageService.toutMasquerLesMotsFrancais().then(s => this.words = s)
    this.hideFrancais = true
  }//toutMasquerFrancais

  allerArechercheWeb(){
    this.navigate.navigateRoot('tabs/tab1/recherche-web')
  }

}
