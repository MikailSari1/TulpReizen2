import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {DestinationListComponent} from "../destination/destination-list/destination-list.component";

@Component({
  selector: 'lib-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class NavComponent {
  protected readonly DestinationListComponent = DestinationListComponent;
}
