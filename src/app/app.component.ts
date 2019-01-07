import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { BuenosairesPage } from '../pages/buenosaires/buenosaires';
import { LaplataPage } from '../pages/laplata/laplata';
import { MardeplataPage } from '../pages/mardeplata/mardeplata';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private storage: Storage) {

      this.storage.get('ciudad').then(ciudad=> 
        { 
          if(ciudad) 
          { 
            if(ciudad == 'lp')
            {
              this.rootPage = LaplataPage;
            }
            else if (ciudad == 'bsas')
            {
              this.rootPage = BuenosairesPage;
            }
            else if (ciudad == 'mdp')
            {
              this.rootPage = MardeplataPage;
            }
           } 
          else { 
            this.rootPage = HomePage;
           }
        });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

