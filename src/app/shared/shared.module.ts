import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as appServices from './app-services';
import * as domainServices from './domain-services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    domainServices.FactDataService,
    appServices.CoreHttpService
  ],
  declarations: []
})

export class SharedModule { }
