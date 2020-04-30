import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddEvents = [];
  evenEvents = [];
  timespend=0;
  onsecgoes()
  {
    this.timespend++;
    if(this.timespend%2==0)
    {
      this.evenEvents.push(this.timespend);
    }
    else
    {
      this.oddEvents.push(this.timespend);
    }
  }
}
