import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date();
  events1 = [
    {title: 'Crash Event', start: new Date(), color: {primary: '#fff', secondary: '#ababab'}}
  ];
  events2 = [
    {title: 'Good Event', start: new Date(), color: {primary: '#fff', secondary: '#ababab'}}
  ];
}
