import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class FactsNavigationService {

  constructor(private router: Router) { }

  public navigateToOverview(): void {
    this.router.navigate(['/facts']);
  }

  public navigateToFactEdit(factId: string): void {
    this.router.navigate(['/facts', factId]);
  }
}
