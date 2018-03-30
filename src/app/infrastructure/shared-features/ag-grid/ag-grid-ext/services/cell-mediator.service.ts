import { Injectable } from '@angular/core';

import { RowNode } from 'ag-grid/main';

import { CellMediatorCallback } from '../types';

@Injectable()
export class CellMediatorService {
  private _callback: CellMediatorCallback;

  public registerCallback(callback: CellMediatorCallback): void {
    this._callback = callback;
  }

  public executeCallback(rowNode: RowNode): void {
    this._callback(rowNode);
  }
}
