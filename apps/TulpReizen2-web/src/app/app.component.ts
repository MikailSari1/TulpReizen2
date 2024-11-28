import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {NavComponent} from "@tulp-reizen2/features";
import {FooterComponent} from "@tulp-reizen2/features";
import {FeaturesModule} from "@tulp-reizen2/features";
import {DestinationService} from "@tulp-reizen2/features";
import {GuideComponent} from "@tulp-reizen2/features";
import {GuideService} from "@tulp-reizen2/features";

@Component({
  standalone: true,
  imports: [RouterModule, NavComponent, FooterComponent, FeaturesModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DestinationService, GuideService]
})
export class AppComponent {
  title = 'TulpReizen-web';
}
