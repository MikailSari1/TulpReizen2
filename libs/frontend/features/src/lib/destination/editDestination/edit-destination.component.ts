import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activities, IDestination} from '@TulpReizen2/shared/api';
import { Subscription } from 'rxjs';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'lib-edit-destination',
  templateUrl: './edit-destination.component.html',
  styleUrl: './edit-destination.component.css',
})
export class EditDestinationComponent implements OnInit, OnDestroy {
  destination: IDestination | null = null;
  activities = Object.values(Activities);
  subscription: Subscription | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService,
    private router: Router
  ) {}

  ngOnInit() {
    const destinationId = this.route.snapshot.paramMap.get('id');
    if (destinationId) {
      this.subscription = this.destinationService.read(destinationId).subscribe((destination: IDestination | null) => {
        this.destination = destination;
        console.log('Destination:', this.destination);
      });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  onSubmit() {
    if (this.destination) {
      this.destinationService.update(this.destination).subscribe({
        next: () => {
          console.log('Destination updated successfully');
          this.router.navigate(['/destinations']);
        },
        error: (err) => {
          console.error('Error updating destination:', err);
        }
      });
    }
  }
}
