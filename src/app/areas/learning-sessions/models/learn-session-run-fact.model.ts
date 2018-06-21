export class LearningSessionRunFact {
  public showAnswer: boolean;
  constructor(public questionText: string | undefined, public answerText: string | undefined) {
    this.showAnswer = false;
  }
}
