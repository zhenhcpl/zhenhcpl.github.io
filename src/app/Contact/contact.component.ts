import { Component } from '@angular/core';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.html',
    styleUrls: ['contact.css']
})

export class ContactComponent {
    isSpinnerVisible: Boolean = true;

    private onFrameLoaded() {
        console.log('on frame loaded');
        this.isSpinnerVisible = false;
    }
}

