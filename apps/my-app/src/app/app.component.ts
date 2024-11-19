/*
import { Component } from '@angular/core';

@Component({
    selector: 'avans-nx-workshop-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-app';
}
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'avans-nx-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showHeader = false;
  showDestination = false;
  showFooter = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;

      // Show components only on specific routes
      this.showHeader = currentRoute !== '/';
      this.showDestination = currentRoute === '/destinations';
      this.showFooter = currentRoute !== '/';
    });
  }
}
