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
  public runFacts: LearningSessionRunFact[] = [];

  public currentRunFact: LearningSessionRunFact | null = null;

  public constructor(
    private route: ActivatedRoute) { }

  public ngOnInit() {
    this.initializeRoutes();
  }

  public get currentRunFactPosition(): number {
    return this.runFacts.indexOf(this.currentRunFact!) + 1;
  }

  public get runFactsCount(): number {
    return this.runFacts.length;
  }

  public get canMoveToNextRunFact(): boolean {
    return (this.runFacts.indexOf(this.currentRunFact!) + 1) < this.runFacts.length;
  }

  public get canMoveToPreviousRunFact(): boolean {
    return this.runFacts.indexOf(this.currentRunFact!) > 0;
  }

  public moveToNextRunFact(): void {
    this.setCurrentRunFact(this.runFacts.indexOf(this.currentRunFact!) + 1);
  }

  public moveToPreviousRunFact(): void {
    this.setCurrentRunFact(this.runFacts.indexOf(this.currentRunFact!) - 1);
  }

  private setCurrentRunFact(index: number): void {
    this.currentRunFact = this.runFacts[index];
  }

  private initializeRoutes(): void {
    this.route.data.subscribe(data => {
      var runFacts = <Array<LearningSessionRunFact>>data['runFacts'];
      if (runFacts) {
        this.runFacts = ArrayUtils.shuffleEntries(runFacts);
        this.setCurrentRunFact(0);
      }
    });
  }
}
