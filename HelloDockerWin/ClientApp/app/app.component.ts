import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {
    title = 'app';

    constructor() {
        setTheme('bs3'); // or 'bs4'
    }
}
