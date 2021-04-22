import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Words, ChoixReponsePossible } from 'src/app/models/words';
import { Setting } from '../../models/setting';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.page.html',
  styleUrls: ['./game2.page.scss'],
})

export class Game2Page implements OnInit {

  constructor(private storage: Storage) { }

  motAChercher: Words;
  choixReponsePropose: ChoixReponsePossible[] = [];
  words: Words[] = [];
  phraseAafficher: string;
  panelReponseShow: boolean = false;
  resultatDuJeu = {
    gagnant : 0,
    perdant : 0
  }
  setting:Setting;

  async ngOnInit() {
    await this.initWordsStorage()
    await this.randomWord()
    await this.choixDeReponse()
  }

  async initWordsStorage() {
    const words = await this.storage.get('words')
    this.words = words
  }

  async randomWord() {
    // this.motAChercher = await this.words[Math.floor(Math.random() * Math.floor(Math.floor(Math.random() * this.words.length)))]
    this.motAChercher = await this.words[Math.floor(Math.random() * this.words.length + 1)]
  }

  async choixDeReponse() {
    const emplacement = [0, 1, 2]
    const numberBonChoix = Math.floor(Math.random() * 3); 

    for (let x of emplacement) {
      if (x == numberBonChoix) {
        await this.choixReponsePropose.push({
          francais: this.motAChercher.francais.word,
          anglais: this.motAChercher.anglais.word,
          bonMot: true,
          emplacement: numberBonChoix
        })
      } else {
        
        const IndexAutreMot = Math.floor(Math.random() * this.words.length + 1);
        // const GoodIndexAutreMot : number = IndexAutreMot;

        // for(let x = 0; this.words[IndexAutreMot].francais.word === this.motAChercher.francais.word; x++){
          
        // }

        await this.choixReponsePropose.push({
          francais: this.words[IndexAutreMot].francais.word,
          anglais: this.words[IndexAutreMot].anglais.word,
          bonMot: false,
          emplacement: x
        })
      }
    }
  }

  VerifieReponse(reponse: boolean) {
    if (reponse) {
      this.phraseAafficher = "Tu as trouvé la bonne réponse :)";
      this.panelReponseShow = true;
      setTimeout(() =>              {
        this.panelReponseShow = false;
        this.NouveauJeu(reponse)
      }, 1000);
    } else {
      this.panelReponseShow = true;
      this.phraseAafficher = "Désolé, la bonne réponse était \"" + this.motAChercher.francais.word + "\"";
      setTimeout(() => {
        this.panelReponseShow = false;
        this.NouveauJeu(reponse)
      }, 1000);
    }
  }

  NouveauJeu(reponse : boolean){
    if(reponse){
      this.resultatDuJeu.gagnant = this.resultatDuJeu.gagnant + 1;
    }else{
      this.resultatDuJeu.perdant = this.resultatDuJeu.perdant + 1;
    }

    // this.storage.get('setting').then(setting => {
    //   this.setting = setting
    // })

    // this.setting.resultatDuJeu.gagnant = this.resultatDuJeu.gagnant
    // this.setting.resultatDuJeu.perdant = this.resultatDuJeu.perdant

    // this.storage.set('setting',this.setting)

    this.choixReponsePropose = [];
    this.randomWord()
    this.choixDeReponse()
  }


}
