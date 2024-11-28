import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {IGuide} from "@TulpReizen2/shared/api";
import {Subscription} from "rxjs";
import {GuideService} from "./guide.service";

@Component({
  selector: 'lib-guide',
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css',
})
export class GuideComponent implements OnInit, OnDestroy{
  guides: IGuide[] | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(private guideService: GuideService) {}

  ngOnInit() {
    this.subscription = this.guideService
      .list()
      .subscribe((data: IGuide[] | null) => {
        this.guides = data;
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
