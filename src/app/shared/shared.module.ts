import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as domainServices from './domain-services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    domainServices.FactDataService
  ],
  declarations: []
})

export class SharedModule { }
