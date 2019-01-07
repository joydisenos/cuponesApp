import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BuenosairesPage } from '../pages/buenosaires/buenosaires';
import { MardeplataPage } from '../pages/mardeplata/mardeplata';
import { LaplataPage } from '../pages/laplata/laplata';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuenosairesPage,
    LaplataPage,
    MardeplataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuenosairesPage,
    LaplataPage,
    MardeplataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
