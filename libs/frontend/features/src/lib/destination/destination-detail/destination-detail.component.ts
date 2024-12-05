/*
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Activities, IDestination} from '@TulpReizen2/shared/api';
import {DestinationService} from '../destination.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'lib-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css'],
})
export class DestinationDetailComponent implements OnInit, OnDestroy {
  destination: IDestination | null = null;
  Activities = Object.values(Activities);
  subscription: Subscription | undefined = undefined;
  isNewDestination = false;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const destinationId = this.route.snapshot.paramMap.get('id');
    if (destinationId) {
      this.subscription = this.destinationService.read(destinationId).subscribe((destination: IDestination | null) => {
        this.destination = destination;
        console.log('Destination:', this.destination);
      });
    } else {
      this.isNewDestination = true;
      this.destination = this.createEmptyDestination();
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private createEmptyDestination(): IDestination {
    return {
      id: '',
      location: '',
      description: '',
      activities: Activities.None,
    };
  }


  onSubmit(form: NgForm): void {
    if (this.destination) {
      if (this.isNewDestination) {
        this.destinationService.create(this.destination).subscribe({
          next: () => {
            console.log('Destination created successfully');
            this.router.navigate(['/destinations']);
          },
          error: (err) => {
            console.error('Error creating destination:', err);
          }
        });
      } else {
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
    } else {
      console.log('Destination is empty');
    }
  }
}
*/


import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Activities, IDestination } from '@TulpReizen2/shared/api';
import { DestinationService } from '../destination.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css'],
})
export class DestinationDetailComponent implements OnInit, OnDestroy {
  destination: IDestination | null = null;
  activities = Object.values(Activities);
  subscription: Subscription | undefined = undefined;
  isNewDestination = false;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const destinationId = this.route.snapshot.paramMap.get('id');
    if (destinationId) {
      this.subscription = this.destinationService.read(destinationId).subscribe((destination: IDestination | null) => {
        this.destination = destination;
        console.log('Destination:', this.destination);
      });
    } else {
      this.isNewDestination = true;
      this.destination = this.createEmptyDestination();
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private createEmptyDestination(): IDestination {
    return {
      id: '',
      location: '',
      description: '',
      activities: Activities.None,
    };
  }

  onSubmit(form: NgForm): void {
    if (this.destination) {
      if (this.isNewDestination) {
        this.destinationService.create(this.destination).subscribe({
          next: () => {
            console.log('Destination created successfully');
            this.router.navigate(['/destinations']);
          },
          error: (err) => {
            console.error('Error creating destination:', err);
          }
        });
      } else {
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
    } else {
      console.log('Destination is empty');
    }
  }
}
