import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css'],
  animations: [
    trigger('navlinkState', [
      state('normal', style({
        backgroundColor: 'transparent',
        transform: 'scale(1)'
      })),
      state('hover', style({
        backgroundColor: '#212529',
        transform: 'scale(1.1)'
      })),
      transition('normal => hover', animate('200ms ease-in')),
      transition('hover => normal', animate('200ms ease-out'))
    ]),
    trigger('navAnchorState', [
      state('normal', style({
        color: 'rgba(0,0,0,0.5)',
      })),
      state('hover', style({
        color: 'rgb(255,255,255)',
      })),
      transition('normal => hover', animate('200ms ease-in')),
      transition('hover => normal', animate('200ms ease-out'))
    ])
  ]
})

export class HomeComponent {

    navigationState: String = 'normal';
  private onNavLinkHover(): void {
    console.log('onhover');
    this.navigationState = 'hover';
  }

  private onNavLinkHoverExit(): void {
     this.navigationState = 'normal';
  }
}
