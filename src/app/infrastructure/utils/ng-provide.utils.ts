import { ValueProvider, ClassProvider } from '@angular/core';

export class NgProvideUtils {
  public static provideValue(provide: any, useValue: any, multi?: boolean): ValueProvider {
    return {
      multi: multi,
      provide: provide,
      useValue: useValue
    };
  }
  public static provideClass(provide: any, useClass: any, multi?: boolean): ClassProvider {
    return {
      multi: multi,
      provide: provide,
      useClass: useClass
    };
  }
}
