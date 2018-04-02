import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArrayUtils } from 'app/infrastructure/utils';
import { Fact } from 'app/shared/models';

@Component({
  selector: 'app-learning-session-run',
  templateUrl: './learning-session-run.component.html',
  styleUrls: ['./learning-session-run.component.scss']
})
export class LearningSessionRunComponent implements OnInit {

  public currentFact: Fact | null = null;
  public facts: Fact[] = [];

  public constructor(
    private route: ActivatedRoute) { }

  public get canMoveToNextFact(): boolean {
    return (this.facts.indexOf(this.currentFact!) + 1) < this.facts.length;
  }

  public get canMoveToPreviousFact(): boolean {
    return this.facts.indexOf(this.currentFact!) > 0;
  }

  public get currentFactPosition(): number {
    return this.facts.indexOf(this.currentFact!) + 1;
  }

  public get factsCount(): number {
    return this.facts.length;
  }

  public moveToNextFact(): void {
    this.setCurrentFact(this.facts.indexOf(this.currentFact!) + 1);
  }

  public moveToPreviousFact(): void {
    this.setCurrentFact(this.facts.indexOf(this.currentFact!) - 1);
  }

  public ngOnInit() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.route.data.subscribe(data => {
      const facts = <Array<Fact>>data['facts'];
      if (facts) {
        this.facts = ArrayUtils.shuffleEntries(facts);
        this.setCurrentFact(0);
      }
    });
  }

  private setCurrentFact(index: number): void {
    this.currentFact = this.facts[index];
  }
}
