import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'talk-row',
  templateUrl: 'talk-row.html'
})
export class TalkRowComponent implements OnInit {

  // text: string;
  @Input()
  charla

  @Output()
  charlaPulsada = new EventEmitter<any>()

  constructor() {
    console.log('Hello TalkRow Component');
    // this.text = 'Hello World';
  }

  ngOnInit() {
    console.log("Estoy en onOnit " + this.charla.name)
  }

  clickOnCharla($event) {
    console.log('Evento de click: ' + $event)
    this.charlaPulsada.emit(this.charla)
    // this.charlaPulsada.emit($event)
  }


}

