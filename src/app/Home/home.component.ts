import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare const window;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('swipeIn-1', [
      transition('void => *', [
        style({ width: 0 }),
        animate('500ms ease-in-out', style({ width: '*' }))
      ]),
      transition('* => void', [
        style({ width: '*' }),
        animate('200ms ease-in-out', style({ width: 0 }))
      ])
    ]),
    trigger('swipeIn-2', [
      transition('void => *', [
        style({ width: 0 }),
        animate('500ms 50ms ease-in-out', style({ width: '*' }))
      ]),
      transition('* => void', [
        style({ width: '*' }),
        animate('200ms 25ms ease-in-out', style({ width: 0 }))
      ])
    ]),
    trigger('swipeIn-3', [
      transition('void => *', [
        style({ width: 0 }),
        animate('500ms 75ms ease-in-out', style({ width: '*' }))
      ]),
      transition('* => void', [
        style({ width: '*' }),
        animate('200ms 50ms ease-in-out', style({ width: 0 }))
      ])
    ])
  ]

})


export class HomeComponent {

  isInsideRamesth: Boolean;
  isInsideZhen: Boolean;
  zhenState: string;
  ramesthState: string;

}
