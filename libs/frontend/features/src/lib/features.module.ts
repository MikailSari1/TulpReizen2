import {NgModule} from "@angular/core";
import {DestinationListComponent} from "./destination/destination-list/destination-list.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";
import {GuideComponent} from "./guides/guide.component";




@NgModule({
    imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    RouterLink
    ],
    declarations: [
         DestinationListComponent,
         GuideComponent ],
  providers: [],

})

export class FeaturesModule{}
