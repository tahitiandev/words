import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Words } from '../models/words';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(public storage : Storage) { 
    
    this.storage.get('words').then(localstorage => {
      if(localstorage){
        for(let data of localstorage){
          this.words.push(data)
        }
      }
    })

  }

  words : Words[] = []

  getStorage(){
    return this.words
  }//getStorage
  
  setStorage(motFrancais:string, motAnglais){

      if(motFrancais != null && motAnglais != null && motFrancais != '' && motAnglais != ''){
        this.words.push({
          francais : {
            word : motFrancais,
            hide : false
          },
          anglais : {
            word : motAnglais,
            hide : false
          },
          syncToFirebase : false
        })

        return this.storage.set('words', this.words).then(s=> {
          return s
        })

      }//if
      
  }//setStorage
  
  editWord(index : number, francais : string, anglais:string){
    this.words[index].francais.word = francais
    this.words[index].anglais.word = anglais
    
    return this.storage.set('words',this.words).then(s => {
      return s
    })

  }//editWord
  
  deleteWord(index : number){
    this.words.splice(index,1)
    this.storage.set('words',this.words)
  }//deleteWord

  toutMasquerLesMotsAnglais(){
    for(let word of this.words){
      word.anglais.hide = true
    }

    return this.storage.set('words',this.words).then(s => {
      return s
    })
  }//toutMasquerLesMotsAnglais

  toutMasquerLesMotsFrancais(){
    for(let word of this.words){
      word.francais.hide = true
    }

    return this.storage.set('words',this.words).then(s => {
      return s
    })
  }//toutMasquerLesMotsFrancais

  toutAfficherLesMotsAnglais(){
    for(let word of this.words){
      word.anglais.hide = false
    }

    return this.storage.set('words',this.words).then(s => {
      return s
    })
  }//toutAfficherLesMotsAnglais

  toutAfficherLesMotsFrancais(){
    for(let word of this.words){
      word.francais.hide = false
    }

    return this.storage.set('words',this.words).then(s => {
      return s
    })
  }//toutAfficherLesMotsFrancais

  afficherMasquerUnMotFrancais(index : number){
    if(this.words[index].francais.hide === false){
      this.words[index].francais.hide = true
    }else{
      this.words[index].francais.hide = false
    }
    return this.storage.set('words',this.words).then(s => {
      return s
    })

  }//afficherUnmotFrancais
  
  afficherMasquerUnMotAnglais(index : number){
    if(this.words[index].anglais.hide === false){
      this.words[index].anglais.hide = true
    }else{
      this.words[index].anglais.hide = false
    }
    return this.storage.set('words',this.words).then(s => {
      return s
    })
  }//masquerUnmotFrancais

}
