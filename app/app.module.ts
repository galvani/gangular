import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'prefix'
            },
        ])
    ],
    declarations: [ AppComponent, DashboardComponent ],
    bootstrap:    [ AppComponent ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})

export class AppModule { }
