import { Component } from '@angular/core';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent {
    isSpinnerVisible: Boolean = true;

    private onFrameLoaded() {
        console.log('on frame loaded');
        this.isSpinnerVisible = false;
    }
}

