import { Injectable } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private storage : Storage) { 
    this.storage.get('words').then(localstorage => {
      if(localstorage){
        for(let data of localstorage){
          this.listeOfWord.push(data)
        }
      }
    })
  }

  private listeOfWord : any = []
  private listeOfRandomWord : any = []

  ListeDeMotAleatoire(nombreMax : number){

    this.listeOfRandomWord = []

    for(let  x = 0; x < nombreMax; x++){
      var nbWordInStorage = this.listeOfWord.length
      this.listeOfRandomWord.push(this.listeOfWord[Math.floor(Math.random() * Math.floor(nbWordInStorage))])
    }

    for(let word of this.listeOfRandomWord){
      word.anglais.hide = false
    }
    this.storage.set('randomWord', this.listeOfRandomWord) 
  }




}
