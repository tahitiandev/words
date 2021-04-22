import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Words } from '../models/words';

@Injectable({
  providedIn: 'root'
})
export class SynchronisationService {

  constructor(private storage : Storage) { }

  private listeOfWord : Words[] = [
    {
      francais : {
        word : 'nier',
        hide : false
      },
      anglais : {
        word : 'deny',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'autoriser',
        hide : false
      },
      anglais : {
        word : 'allow',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'jusqu\'à',
        hide : false
      },
      anglais : {
        word : 'until',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'là',
        hide : false
      },
      anglais : {
        word : 'there',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'au fait',
        hide : false
      },
      anglais : {
        word : 'by the way',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'rejeté',
        hide : false
      },
      anglais : {
        word : 'dismissed',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'répéter',
        hide : false
      },
      anglais : {
        word : 'snoobeze',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'faire la sieste',
        hide : false
      },
      anglais : {
        word : 'snooze',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'pourrait',
        hide : false
      },
      anglais : {
        word : 'might',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'capable, prêt, convient',
        hide : false
      },
      anglais : {
        word : 'fit',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'encore, toujours',
        hide : false
      },
      anglais : {
        word : 'still',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'activer',
        hide : false
      },
      anglais : {
        word : 'enable',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'n\'importe quelle',
        hide : false
      },
      anglais : {
        word : 'any',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'outils',
        hide : false
      },
      anglais : {
        word : 'tools',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'pour aller plus loin',
        hide : false
      },
      anglais : {
        word : 'to further',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'financement',
        hide : false
      },
      anglais : {
        word : 'funding',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'il y a quelques temps',
        hide : false
      },
      anglais : {
        word : 'a while',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'tant que',
        hide : false
      },
      anglais : {
        word : 'while',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'il y a quelques jours',
        hide : false
      },
      anglais : {
        word : 'a couple of day',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'comment ça marche',
        hide : false
      },
      anglais : {
        word : 'how it works',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'autonome',
        hide : false
      },
      anglais : {
        word : 'standalone',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'n\'est-ce pas',
        hide : false
      },
      anglais : {
        word : 'isn\'t it',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'même',
        hide : false
      },
      anglais : {
        word : 'even',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'leur',
        hide : false
      },
      anglais : {
        word : 'theme',
        hide : false
      },
      syncToFirebase : true
    },
    {
      francais : {
        word : 'dépenses',
        hide : false
      },
      anglais : {
        word : 'spending',
        hide : false
      },
      syncToFirebase : true
    },



  ];

  getDataSynchro(){
    this.setDataInLocalStorage()
    return this.listeOfWord
  }

  setDataInLocalStorage() {
    this.storage.set('words',this.listeOfWord)
  }


}
