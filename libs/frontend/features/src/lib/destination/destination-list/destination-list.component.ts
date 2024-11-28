import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {IDestination} from "@TulpReizen2/shared/api";
import {Subscription} from "rxjs";
import {DestinationService} from "../destination.service";

@Component({
  selector: 'lib-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css',
})
export class DestinationListComponent implements OnInit, OnDestroy{
  destinations: IDestination[] | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(private destinationService: DestinationService) {}

  ngOnInit() {
    this.subscription = this.destinationService
      .list()
      .subscribe((data: IDestination[] | null) => {
      this.destinations = data;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  deleteDestination(id: string): void {
    if (this.destinations) {
      this.destinationService.delete(id).subscribe(() => {
        this.destinations = this.destinations!.filter(destination => destination.id !== id);
      });
    }
  }
}
