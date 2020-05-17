import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { reverse } from './reverse.pipe';
import { filter } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    reverse,
    filter
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
