import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as serv from './services';
import * as comp from './components';

@NgModule({
  exports: [
    comp.AppNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    comp.AppNavigationComponent
  ],
  providers: [
    serv.AppNavigationService
  ]
})
export class AppNavigationModule { }
