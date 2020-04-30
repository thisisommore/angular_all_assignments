import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
@Output() StartTimer = new EventEmitter();
@Input() timecheck;
evenArr = [];
oddArr = [];
intervalvar;
emitevent()
{
  this.StartTimer.emit();
}
OnStartTimerCalled()
{
  // this.StartTimer.emit();
  this.intervalvar=setInterval(() => { 
    this.emitevent(); 
    if(this.timecheck!=0)
    {
    if(this.timecheck%2==0)
    {
      this.evenArr.push(this.timecheck);
    }
    else
    {
      this.oddArr.push(this.timecheck);
    } 
  }
  },1000)
}
OnStopTimerCalled()
{
  clearInterval(this.intervalvar);
}

  constructor() { }

  ngOnInit(): void {
  }

}
