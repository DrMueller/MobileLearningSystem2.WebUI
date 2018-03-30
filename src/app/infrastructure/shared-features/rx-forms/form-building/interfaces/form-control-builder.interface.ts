import { IRxFormBuilder, IValidationKeyErrorMapBuilder } from '.';
import { IValidator } from '../../validators';

export interface IFormControlBuilder {
  buildControl(): IRxFormBuilder;
  withDefaultValue(value: any): IFormControlBuilder;
  withValidation(validator: IValidator): IValidationKeyErrorMapBuilder;
  withModelBinding(propertyName: string): IFormControlBuilder;
}
