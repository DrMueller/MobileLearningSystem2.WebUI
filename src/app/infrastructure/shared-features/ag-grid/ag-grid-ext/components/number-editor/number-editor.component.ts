import { Component } from '@angular/core';

import { AgEditorComponent } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid/main';

@Component({
  selector: 'app-number-editor',
  templateUrl: './number-editor.component.html',
  styleUrls: ['./number-editor.component.scss']
})
export class NumberEditorComponent implements AgEditorComponent {
  public value: number;

  getValue() {
    return this.value;
  }

  isPopup(): boolean {
    return false;
  }

  isCancelBeforeStart(): boolean {
    return false;
  }
  isCancelAfterEnd(): boolean {
    return false;
  }
  focusIn(): void {
  }

  focusOut(): void {
  }

  agInit(params: ICellEditorParams): void {
    this.value = params.value;
  }

  afterGuiAttached(): void {
  }
}
