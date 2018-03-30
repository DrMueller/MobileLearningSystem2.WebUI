import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as comp from './components';

@NgModule({
  exports: [
    comp.CollapsibleCardComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    comp.CollapsibleCardComponent
  ]
})
export class CollapsibleCardModule { }
