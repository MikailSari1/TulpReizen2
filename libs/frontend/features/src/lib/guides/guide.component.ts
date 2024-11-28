import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import {Activities, IGuide} from "@TulpReizen2/shared/api";
import { Subscription } from "rxjs";
import { GuideService } from "./guide.service";

@Component({
  selector: 'lib-guide',
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css',
})
export class GuideComponent implements OnInit, OnDestroy {
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

  loadGuides(): void {
    this.guideService.list().subscribe((guides) => {
      this.guides = guides || [];
    });
  }

  deleteGuide(id: string): void {
    if (this.guides) {
      this.guideService.delete(id).subscribe(() => {
        this.guides = this.guides!.filter(guide => guide.id !== id);
      });
    }
  }

  createGuide(location: string, description: string, activities: Activities): void {
    const newGuide: IGuide = { id: '', location, description, activities };
    this.guideService.create(newGuide).subscribe((guide) => {
      this.guides = [...this.guides!, guide];
    });
  }

  updateGuide(id: string, location: string, description: string, activities: Activities): void {
    const updatedGuide: IGuide = { id, location, description, activities };
    this.guideService.update(id, updatedGuide).subscribe((guide) => {
      this.guides = this.guides!.map((guide) => (guide.id === id ? guide : guide));
    });
  }

}
