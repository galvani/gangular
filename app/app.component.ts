import { htmlTemplate } from './app.html'
import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
    selector: 'gangular',
    host: {
        '[class.wasUpdated]': 'updated'
    },
    styles: [],
    template: htmlTemplate,
    moduleId: module.id
})

export class AppComponent {
    class = 'relative';
}