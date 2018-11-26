import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FaqPage } from '../../pages/faq/faq';
import { HomePage } from '../../pages/home/home';
import { ContactusPage } from '../../pages/contactus/contactus';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello MenuComponent Component');
    this.text = 'Hello World';
  }

  toggleChildMenu(event) {
    console.log("In on hover event");
  }

  public gotoFAQ() {
    this.navCtrl.push(FaqPage);
  }

  public gotoHome() {
    this.navCtrl.push(HomePage);
  }

  public gotoContactUs() {
    this.navCtrl.push(ContactusPage);
  }

}
