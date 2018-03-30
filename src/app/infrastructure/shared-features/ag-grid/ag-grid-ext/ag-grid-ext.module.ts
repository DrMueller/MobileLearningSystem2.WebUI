import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as comp from './components';

@NgModule({
  entryComponents: [
    comp.DeleteButtonCellRendererComponent,
    comp.AddButtonCellRendererComponent,
    comp.NumberEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    comp.DeleteButtonCellRendererComponent,
    comp.AddButtonCellRendererComponent,
    comp.NumberEditorComponent,
  ],
})
export class AgGridExtModule { }
