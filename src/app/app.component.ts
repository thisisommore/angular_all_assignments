import { Component, OnInit } from '@angular/core';
import { countdown } from './countdownChanges.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor( public countData : countdown ){}
}
