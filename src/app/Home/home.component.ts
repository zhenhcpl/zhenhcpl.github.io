import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare const window;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

    constructor(private router: Router) {
      console.log('inside router');
    }

    private openPaulLink() {
      window.open('http://www.paulrealestates.com/');
    }


}
