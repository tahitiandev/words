import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Storage } from '@ionic/storage';
import { Setting } from '../models/setting';
import { Words } from '../models/words';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private gameService : GameService,
              private storage : Storage,
              private nav : NavController) {
              }

  listeOfRandomWord : Words [];
  hideAnglais : boolean = false;
  hideFrancais : boolean = false;
  nbwordSelected : number;

 ngOnInit(){
   this.refreshPage()
 }
  
 goToPage(num : number){
  // this.nav.navigateRoot('/tab2/game1')
  this.nav.navigateRoot('tabs/tab2/game'+num)
 }

  refreshPage(){
    this.listeOfRandomWord = [];
  }

  async getRandomWord(){
    await this.storage.get('setting').then((setting : Setting) => {
      if(setting){
        this.nbwordSelected = setting.nbWord
        this.gameService.ListeDeMotAleatoire(this.nbwordSelected)
      }
    })
    await this.storage.get('randomWord').then(s => this.listeOfRandomWord = s)
  }

  toggleHideWord(index:number, langue:string){
    if(langue == 'francais'){
        if(this.listeOfRandomWord[index].francais.hide === true){
          this.listeOfRandomWord[index].francais.hide = false
        }else{
          this.listeOfRandomWord[index].francais.hide = true
        }
      // this.storageService.afficherMasquerUnMotFrancais(index).then(s => this.listeOfRandomWord = s)
    }else{
      if(this.listeOfRandomWord[index].anglais.hide === true){
        this.listeOfRandomWord[index].anglais.hide = false
      }else{
        this.listeOfRandomWord[index].anglais.hide = true
      }
      // this.storageService.afficherMasquerUnMotAnglais(index).then(s => this.listeOfRandomWord = s)
    }
  }//toggleHideWord

  toutAfficherAnglais(){
    for(let word of this.listeOfRandomWord){
      word.anglais.hide = false
    }
    this.hideAnglais = false;
  }//toutAfficherAnglais
  
  toutAfficherFrancais(){
    for(let word of this.listeOfRandomWord){
      word.francais.hide = false
    }
    this.hideFrancais = false
  }//toutAfficherFrancais

  toutMasquerAnglais(){
    for(let word of this.listeOfRandomWord){
      word.anglais.hide = true
    }
    this.hideAnglais = true;
  }//toutMasquerAnglais
  
  toutMasquerFrancais(){
    for(let word of this.listeOfRandomWord){
      word.francais.hide = true
    }
    this.hideFrancais = true
  }//toutMasquerFrancais


}
