import { IFormControlBuilder } from '.';

export interface IValidationKeyErrorMapBuilder {
  buildValidationKeyErrorMap(): IFormControlBuilder;
  withCustomErrorMessage(errorMessage: string): IValidationKeyErrorMapBuilder;
}
