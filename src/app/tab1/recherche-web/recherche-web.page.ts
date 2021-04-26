import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recherche-web',
  templateUrl: './recherche-web.page.html',
  styleUrls: ['./recherche-web.page.scss'],
})
export class RechercheWebPage implements OnInit {

  constructor(private navigate : NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navigate.navigateRoot('tabs/tab1')
  }

  goUrl(){
    this.navigate.navigateRoot('http://translate.google.com/?hl=fr&tab=wT')
  }


}
