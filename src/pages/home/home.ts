import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BuenosairesPage } from '../buenosaires/buenosaires';
import { LaplataPage } from '../laplata/laplata';
import { MardeplataPage } from '../mardeplata/mardeplata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private storage: Storage) { 

      this.storage.get('ciudad').then(ciudad=> 
        { 
          if(ciudad) 
          { 
            if(ciudad == 'lp')
            {
              this.navCtrl.setRoot(LaplataPage);
            }
            else if (ciudad == 'bsas')
            {
              this.navCtrl.setRoot(BuenosairesPage);
            }
            else if (ciudad == 'mdp')
            {
              this.navCtrl.setRoot(MardeplataPage);
            }
           } 
          else { }
        });
  }

  goPage(page)
  {
    if(page == 'lp')
    {
      this.storage.set('ciudad', page);
      this.navCtrl.setRoot(LaplataPage);
    }
    else if (page == 'bsas')
    {
      this.storage.set('ciudad', page);
      this.navCtrl.setRoot(BuenosairesPage);
    }
    else if (page == 'mdp')
    {
      this.storage.set('ciudad', page);
      this.navCtrl.setRoot(MardeplataPage);
    }
    
  }

}
