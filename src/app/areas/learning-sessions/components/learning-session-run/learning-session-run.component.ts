import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArrayUtils } from 'app/infrastructure/utils';
import { LearningSessionRunFact } from '../../models';

@Component({
  selector: 'app-learning-session-run',
  templateUrl: './learning-session-run.component.html',
  styleUrls: ['./learning-session-run.component.scss']
})

export class LearningSessionRunComponent implements OnInit {
  public currentRunFact: LearningSessionRunFact | null = null;
  public runFacts: LearningSessionRunFact[] = [];

  public constructor(
    private route: ActivatedRoute) { }

  public get canMoveToNextFact(): boolean {
    return (this.runFacts.indexOf(this.currentRunFact!) + 1) < this.runFacts.length;
  }

  public get canMoveToPreviousFact(): boolean {
    return this.runFacts.indexOf(this.currentRunFact!) > 0;
  }

  public get currentRunFactPosition(): number {
    return this.runFacts.indexOf(this.currentRunFact!) + 1;
  }

  public get runFactsCount(): number {
    return this.runFacts.length;
  }

  public moveToNextRunFact(): void {
    this.setCurrentFact(this.runFacts.indexOf(this.currentRunFact!) + 1);
  }

  public moveToPreviousRunFact(): void {
    this.setCurrentFact(this.runFacts.indexOf(this.currentRunFact!) - 1);
  }

  public ngOnInit() {
    this.initializeRoutes();
  }

  public showAnswer(): void {
    this.currentRunFact!.showAnswer = true;
  }

  private initializeRoutes(): void {
    this.route.data.subscribe(data => {
      const runFacts = <Array<LearningSessionRunFact>>data['facts'];
      if (runFacts) {
        this.runFacts = ArrayUtils.shuffleEntries(runFacts);
        this.setCurrentFact(0);
      }
    });
  }

  private setCurrentFact(index: number): void {
    this.currentRunFact = this.runFacts[index];
    this.currentRunFact.showAnswer = false;
  }
}
