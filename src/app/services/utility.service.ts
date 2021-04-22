import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private storage : Storage) { }

  wordWithFirebase = [];


  // Permet de mettre à jour le localstorage "words"
  // ici j'ai rajouté le flague syncToFirebase : true
  MettreAJourWordsStorage(){
    this.storage.get('words').then(wordInStorage => {     

      for(let word of wordInStorage){
        this.wordWithFirebase.push({
          anglais : {
            word : word.anglais.word,
            hide : false
          },
          francais : {
            word : word.anglais.word,
            hide : false
          },
          syncToFirebase : true
        })
      } 

      this.storage.set('words', this.wordWithFirebase)

    })
  }










}
