import { JmiguelPage } from './../jmiguel/jmiguel';
// import { composeValidators } from '@angular/forms/src/directives/shared';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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


  getSearchItems($event) {
    console.log("Queremos buscar por " + JSON.stringify($event))

  }

  changeItem1($event) {
    console.log("Cambia el item1 ")
  }

  changeItem2($event) {
    console.log("Cambia el item2 ")
  }


  addTalk(myForm) {
    console.log("MyForm es :" + myForm)
    console.log("name :" + myForm.name)
    return false;
  }

  jmiguelClick() {
    console.log("saltando a jmiguel")
    this.navCtrl.push(JmiguelPage, { 'param1': 'jmiguel', 'param2': 'bitcoiner' })
  }

  theForm;
  nameControl: FormControl;
  speakerControl;


  constructor(public navCtrl: NavController, public talkService: TalkService, public fb: FormBuilder) {
    talkService.retrieveAllTalks().
      subscribe(x => this.talks = x);


    this.nameControl = new FormControl('jmiguel', Validators.required)
    this.nameControl.valueChanges.subscribe(x => console.log(x))
    this.speakerControl = new FormControl('')


    this.theForm = fb.group({
      name: this.nameControl,
      speaker: this.speakerControl
    });
  }
}
