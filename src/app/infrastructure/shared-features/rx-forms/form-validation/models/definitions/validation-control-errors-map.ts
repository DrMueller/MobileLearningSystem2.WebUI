import { ValidationKeyErrorMap } from '.';
import { ValidationError } from '../';

// Maps a Control via its name to a set of Validations
export class ValidationControlErrorsMap {
  public constructor(
    public readonly controlName: string,
    public readonly validationMaps: ValidationKeyErrorMap[]) {
  }

  public getValidationErrors(validationKeys: string[]): ValidationError[] {
    const foundMaps = this.validationMaps.filter(f => validationKeys.some(key => f.validationKey === key));
    const result = foundMaps.map(f => f.validationError);
    return result;
  }
}
