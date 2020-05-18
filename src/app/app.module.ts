import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

export const firebaseConfig = {
  apiKey: "AIzaSyA0R2BtBnr2l_SSTX_PwkswT1xbCEIVfcg",
    authDomain: "final-943d9.firebaseapp.com",
    databaseURL: "https://final-943d9.firebaseio.com",
    projectId: "final-943d9",
    storageBucket: "final-943d9.appspot.com",
    messagingSenderId: "619009460497",
    appId: "1:619009460497:web:6c5c96b3e46fafec10a4b0"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFirestoreModule, 
    IonicModule.forRoot(), AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
