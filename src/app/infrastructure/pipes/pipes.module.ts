import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as pipes from './pipes';

@NgModule({
  exports: [
    pipes.SafeHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    pipes.SafeHtmlPipe
  ]
})
export class PipesModule { }
