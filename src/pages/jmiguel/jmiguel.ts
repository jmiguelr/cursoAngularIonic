import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-jmiguel',
  templateUrl: 'jmiguel.html'
})
export class JmiguelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("Constructor jmiguel")
  }

  params = ""
  ionViewDidLoad() {
    this.params = this.navParams.data

    // O this.param1 = this.navParams.get('param1')
    
    console.log('ionViewDidLoad JmiguelPage');
    console.log('Los params son ' + JSON.stringify(this.navParams.data)  );
  }

}
