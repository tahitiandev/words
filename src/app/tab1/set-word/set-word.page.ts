import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-set-word',
  templateUrl: './set-word.page.html',
  styleUrls: ['./set-word.page.scss'],
})
export class SetWordPage implements OnInit {

  constructor(private navigate : NavController,
              private storageService : StorageService) { }

  ngOnInit() {
  }

  returnBack(){
    this.navigate.pop()
  }

  addWord(form : NgForm){

    const mot = form.value

    this.storageService.setStorage(mot['francais'], mot['anglais'])

    form.reset()
    this.returnBack()
  }

}
