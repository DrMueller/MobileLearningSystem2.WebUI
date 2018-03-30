import { ValidatorFn } from '@angular/forms';

export interface IValidator {
  key: string;
  defaultErrorMessage: string;
  createFunc(): ValidatorFn;
  initialize(...funcArgs: any[]): void;
}
