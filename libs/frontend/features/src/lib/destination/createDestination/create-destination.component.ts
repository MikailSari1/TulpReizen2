import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDestination, Activities } from '@TulpReizen2/shared/api';
import { Subscription } from 'rxjs';
import { DestinationService } from '../destination.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'lib-create-destination',
  templateUrl: './create-destination.component.html',
  styleUrl: './create-destination.component.css',
})
export class CreateDestinationComponent implements OnInit, OnDestroy {
  destination: IDestination | null = null;
  activities = Object.values(Activities);
  subscription: Subscription | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private DestinationService: DestinationService,
    private router: Router
  ) {}

  ngOnInit() {
    const destinationId = this.route.snapshot.paramMap.get('id');
    if (destinationId) {
      this.subscription = this.DestinationService.read(destinationId).subscribe((destination: IDestination | null) => {
        this.destination = destination;
      });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  onSubmit(createDestination: NgForm) {
    if (this.destination) {
      this.DestinationService.create(this.destination).subscribe({
        next: () => {
          console.log('Destination created successfully');
          this.router.navigate(['/destination']);
        },
        error: (err) => {
          console.error('Error updating destination:', err);
        }
      });
    }
    else{
      console.log('destination is empty');
    }
  }
}
