import { ValidationError } from '../';

// Creates a mapping between a validation-rule (f.e. minlength) and the corresponding error
// Currently, the ValidationError-Object cotnains just a string, but we might enhance it (severity etc.)
export class ValidationKeyErrorMap {
  constructor(public validationKey: string, public validationError: ValidationError) {
  }
}
