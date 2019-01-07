import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuenosairesPage } from './buenosaires';

@NgModule({
  declarations: [
    BuenosairesPage,
  ],
  imports: [
    IonicPageModule.forChild(BuenosairesPage),
  ],
})
export class BuenosairesPageModule {}
