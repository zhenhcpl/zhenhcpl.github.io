import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  @ViewChild('collapsableNavBar') collapsableNavBar: ElementRef;
  @ViewChild('navBarButton') navBarButton: ElementRef;

  constructor(private renderer: Renderer2) { }

  onNavButtonFocusOut(): void {
    if (this.collapsableNavBar.nativeElement.classList.contains('show')) {
      this.navBarButton.nativeElement.click();
    }
  }


}
