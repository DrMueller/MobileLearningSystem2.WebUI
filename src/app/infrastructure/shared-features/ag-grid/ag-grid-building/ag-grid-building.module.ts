import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as serv from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class AgGridBuildingModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AgGridBuildingModule,
      providers: [
        serv.GridBuilderService
      ]
    };
  }
}
