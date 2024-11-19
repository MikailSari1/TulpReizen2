import { Route } from '@angular/router';
import { Component } from '@angular/core';
import { DestinationComponent, DestinationsComponent } from './components/destination/destination.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';

export const appRoutes: Route[] = [
  // Hier komen de URLs
 /* { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path: 'destinations', component: DestinationsComponent },
 /!* { path: 'users', component: UserListComponent },*!/
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent },


  { path: '**', redirectTo: 'destination' }*/
  { path: 'destinations', component: DestinationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'destinations/detail', component: DestinationDetailComponent },
/*
  { path: 'home', component: HomeComponent }
*/
];
