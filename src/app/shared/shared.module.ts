import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as appServices from './app-services';
import * as domainServices from './domain-services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    appServices.FactsHttpService,
    domainServices.FactDataService,
  ],
  declarations: []
})

export class SharedModule { }
