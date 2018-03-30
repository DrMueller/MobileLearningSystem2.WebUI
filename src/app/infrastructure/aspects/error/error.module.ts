import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgProvideUtils } from 'app/infrastructure/utils';

import * as comp from './components';
import * as serv from './services';

@NgModule({
  entryComponents: [
    comp.ErrorDisplayContentComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    comp.ErrorDisplayContentComponent
  ]
})
export class ErrorModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorModule,
      providers: [
        serv.ErrorRegistrationService,
        serv.ErrorDispatcherService,
        serv.ErrorDisplayService,
        serv.ErrorAppInitializationService,
        NgProvideUtils.provideClass(ErrorHandler, serv.GlobalErrorCatcherService)
      ]
    };
  }
}
