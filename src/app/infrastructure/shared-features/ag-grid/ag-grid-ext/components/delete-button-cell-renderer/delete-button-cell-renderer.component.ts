import { Component } from '@angular/core';

import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid/main';

import { CellMediatorService } from '../../services';

@Component({
  selector: 'app-delete-button-cell-renderer',
  templateUrl: './delete-button-cell-renderer.component.html',
  styleUrls: ['./delete-button-cell-renderer.component.scss']
})
export class DeleteButtonCellRendererComponent implements AgRendererComponent {
  private _params: ICellRendererParams;

  refresh(): void {
  }

  agInit(params: ICellRendererParams): void {
    this._params = params;
  }

  afterGuiAttached(): void {
  }

  public cellClicked(): void {
    const cellMediatorService = <CellMediatorService>this._params.context;
    cellMediatorService.executeCallback(this._params.node);
  }
}
