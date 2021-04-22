import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCbsKqgel_xDL1XXA_zI7vGvjgA6qfj57I",
  authDomain: "learn-english-6588b.firebaseapp.com",
  projectId: "learn-english-6588b",
  storageBucket: "learn-english-6588b.appspot.com",
  messagingSenderId: "756666476650",
  appId: "1:756666476650:web:3f27ceda46cacb2d2ec213",
  measurementId: "G-KPBVLG69YC"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
  IonicStorageModule.forRoot(),
  AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  AngularFireStorageModule
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
