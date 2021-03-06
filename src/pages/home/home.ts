import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ServicePage } from '../service/service';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoProfile(){
    // คำสั่งในการเปิด page ใหม่
    this.navCtrl.push(ProfilePage)
  }

  gotoService(){
    // คำสั่งในการเปิด page ใหม่
    this.navCtrl.push(ServicePage)
  }

  gotoInfo(){
    this.navCtrl.push(InfoPage)
  }

}
