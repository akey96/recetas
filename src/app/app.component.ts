import { Component } from '@angular/core';
// Using the /build/artyom.js file
import Artyom from 'artyom.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recetas';
  jarvis = new Artyom();

  constructor() {
    this.jarvis.say("Hello World !");
  }

}
