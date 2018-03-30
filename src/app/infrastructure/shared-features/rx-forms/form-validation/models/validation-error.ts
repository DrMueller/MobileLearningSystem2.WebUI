// Defines the message of a broken validation
// Currently only just the string, but could be enhanced, f.e. by severity etc.
export class ValidationError {
  constructor(public errorMessage: string) {
  }
}
