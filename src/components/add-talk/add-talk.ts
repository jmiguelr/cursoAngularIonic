import { Component } from '@angular/core';

@Component({
  selector: 'add-talk',
  templateUrl: 'add-talk.html'
})
export class AddTalkComponent {

  text: string;

  constructor() {
    console.log('Hello AddTalk Component');
    this.text = 'Hello World';
  }

}
