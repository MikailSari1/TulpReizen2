import {NgModule} from "@angular/core";
import {DestinationListComponent} from "./destination/destination-list/destination-list.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";
import {GuideComponent} from "./guides/guide.component";
import {EditGuideComponent} from "./guides/editGuide/edit-guide.component";
import {FormsModule} from "@angular/forms";
import {CreateGuideComponent} from "./guides/createGuide/create-guide.component";
import {EditDestinationComponent} from "./destination/editDestination/edit-destination.component";
import {CreateDestinationComponent} from "./destination/createDestination/create-destination.component";
import {DestinationDetailComponent} from "./destination/destination-detail/destination-detail.component";




@NgModule({
    imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    RouterLink,
      FormsModule
    ],
    declarations: [
         DestinationListComponent,
         GuideComponent,
         EditGuideComponent,
         CreateGuideComponent,
         EditDestinationComponent,
         CreateDestinationComponent,
         DestinationDetailComponent ],
  providers: [],

})

export class FeaturesModule{}
