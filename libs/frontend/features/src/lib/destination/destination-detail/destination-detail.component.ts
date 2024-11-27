/*
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-destination-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-detail.component.html',
  styleUrl: './destination-detail.component.css',
})
export class DestinationDetailComponent {}

*/

/*
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-destination-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css',
})
export class DestinationListComponent {}
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDestination } from '@TulpReizen2/shared/api';
import { DestinationService } from '../destination.service';


@Component({
  selector: 'lib-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css'],
  standalone: true
})
export class DestinationDetailComponent implements OnInit, OnDestroy {
  destination: IDestination | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.subscription = this.destinationService.read(id).subscribe((destination) => {
        console.log(`Destination details: ${destination}`);
        this.destination = destination;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
