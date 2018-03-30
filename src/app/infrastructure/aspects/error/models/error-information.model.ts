export class ErrorInformation {
  constructor(
    public errorName: string,
    public errorMessage: string
  ) { }

  public static createEmpty(): ErrorInformation {
    return new ErrorInformation('', '');
  }
}
