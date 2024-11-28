import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGuide, Activities } from '@TulpReizen2/shared/api';
import { Subscription } from 'rxjs';
import { GuideService } from '../guide.service';

@Component({
  selector: 'lib-edit-guide',
  templateUrl: './edit-guide.component.html',
  styleUrl: './edit-guide.component.css',
})
export class EditGuideComponent implements OnInit, OnDestroy {
  guide: IGuide | null = null;
  activities = Object.values(Activities);
  subscription: Subscription | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private guideService: GuideService,
    private router: Router
  ) {}

  ngOnInit() {
    const guideId = this.route.snapshot.paramMap.get('id');
    if (guideId) {
      this.subscription = this.guideService.read(guideId).subscribe((guide: IGuide | null) => {
        this.guide = guide;
      });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  onSubmit() {
    if (this.guide) {
      this.guideService.update(this.guide).subscribe({
        next: () => {
          console.log('Guide updated successfully');
          this.router.navigate(['/guides']);
        },
        error: (err) => {
          console.error('Error updating guide:', err);
        }
      });
    }
  }
}
