import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {NavComponent} from "@tulp-reizen2/features";
import {FooterComponent} from "@tulp-reizen2/features";

@Component({
  standalone: true,
  imports: [RouterModule, NavComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TulpReizen-web';
}
