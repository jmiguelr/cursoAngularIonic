import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-jmiguel',
  templateUrl: 'jmiguel.html'
})
export class JmiguelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    console.log("Constructor jmiguel")
    storage.set("var1", "value1")
    storage.set("var2", "value2")
    storage.set("var1", "value1")


    storage.get("var1").then(
      (value =>
        console.log("Ok1: "+ value)
      ))

    storage.get("v1").then(
      (value =>
        console.log("Ok: " + value)
      ),
      (value =>
        console.log("Error: " + value)
      )

    )


  }

  params = ""
  ionViewDidLoad() {
    this.params = this.navParams.data

    // O this.param1 = this.navParams.get('param1')

    console.log('ionViewDidLoad JmiguelPage');
    console.log('Los params son ' + JSON.stringify(this.navParams.data));
  }

}
