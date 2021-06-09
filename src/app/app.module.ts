import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
=======

>>>>>>> a27c5857a0ecdf5dc64f2ae0d82ce1c45e4ad3db

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
=======

>>>>>>> a27c5857a0ecdf5dc64f2ae0d82ce1c45e4ad3db
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
