import { Route } from '@angular/router';
import {
  AboutComponent, AccomodationsComponent, CreateGuideComponent,
  DestinationListComponent, EditDestinationComponent, EditGuideComponent, GuideComponent, HomeComponent
} from "@tulp-reizen2/features";
import {
  DestinationDetailComponent
} from "@tulp-reizen2/features";

export const appRoutes: Route[] = [
  /*{path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'rent', component: RentComponent},
  {path: 'profile', component: ProfileComponent},*/
  { path: 'destinations', component: DestinationListComponent },
  { path: 'destinations/detail', component: DestinationDetailComponent },
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'accomodations', component: AccomodationsComponent },
  { path: 'guides', component: GuideComponent},
  { path: 'guides/:id/edit', component: EditGuideComponent},
  { path: 'guides/create', component: CreateGuideComponent },
  { path: 'destination/:id/edit', component: EditDestinationComponent }
];
