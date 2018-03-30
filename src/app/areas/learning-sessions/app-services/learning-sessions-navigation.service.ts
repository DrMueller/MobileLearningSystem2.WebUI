import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LearningSessionsNavigationService {
  public constructor(private router: Router) { }

  public navigateToOverview(): void {
    this.router.navigate(['/learningSessions']);
  }

  public navigateToEdit(learningSessionId: string): void {
    this.router.navigate(['/learningSessions', learningSessionId]);
  }

  public navigateToRun(learningSessionId: string): void {
    this.router.navigate(['/learningSessions', learningSessionId, 'run']);

  }
}
