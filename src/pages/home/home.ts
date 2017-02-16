import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Http, Headers, RequestOptions } from "@angular/http"
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { TalkService } from "../../providers/talk-service"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TalkService]
})



export class HomePage {

  unaVariableBindeada = "Var Bind"


  talk = {
    speaker: 'jmiguel',
    name: 'Bitcoin'
  };

  talks = [
    {
      speaker: 'jmiguel',
      name: 'Bitcoin'
    },
    {
      speaker: 'ivan',
      name: 'Como llegue a OCI'
    },
    {
      speaker: 'Dani Latorre',
      name: 'Tests'
    }
  ]

  getColorHdr(): string {
    return "red";
  }

  getColor2() {
    return { color: 'yellow' };
  }
  procesaClick($event) {
    console.log("Hi man " + $event);
    console.log($event);

  }

  search($event) {
    console.log("Hi man " + $event);
    console.log($event);

  }

  searchalias(value) {
    console.log("Hi man " + value);
  }

  hijoClicked($event) {
    console.log("Hijo ha sido pulsado, el hijo es " + JSON.stringify($event))
  }


  pintaVarBindeada(value) {
    console.log(value)
  }

  onSubmit(valores) {
    console.log(valores)
  }

  constructor(public navCtrl: NavController, public talkService: TalkService) {
    talkService.retrieveAllTalks().
      subscribe(x => this.talks = x);
  }

}
