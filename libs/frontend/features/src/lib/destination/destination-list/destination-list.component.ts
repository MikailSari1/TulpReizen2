import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'lib-destination-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css',
})
export class DestinationListComponent {}
