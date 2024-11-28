import {NgModule} from "@angular/core";
import {DestinationListComponent} from "./destination/destination-list/destination-list.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";
import {GuideComponent} from "./guides/guide.component";
import {EditGuideComponent} from "./guides/editGuide/edit-guide.component";
import {FormsModule} from "@angular/forms";




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
         EditGuideComponent ],
  providers: [],

})

export class FeaturesModule{}
