import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomeComponent, NgbdModalResa} from './home.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
    ],
    entryComponents: [NgbdModalResa],
    declarations: [ HomeComponent,
        NgbdModalResa],
    exports:[HomeComponent],
    providers: []
})
export class HomeModule { }
