import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public signatureImage : any;

  constructor(public navCtrl: NavController, public navParams:NavParams, public modalController:ModalController) {
  this.signatureImage = navParams.get('signatureImage');;
  }

  openSignatureModel(){
    setTimeout(() => {
       let modal = this.modalController.create(AboutPage);
    modal.present();
    }, 300);

  }

}
