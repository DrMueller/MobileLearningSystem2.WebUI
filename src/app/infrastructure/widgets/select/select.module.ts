import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/primeng';

import * as comp from './components';

@NgModule({
  exports: [
    comp.SelectComponent,
    comp.EnumSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  declarations: [
    comp.SelectComponent,
    comp.EnumSelectComponent
  ]
})

export class SelectModule { }
