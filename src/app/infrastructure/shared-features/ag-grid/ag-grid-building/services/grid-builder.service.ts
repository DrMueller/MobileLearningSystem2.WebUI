import { Injectable } from '@angular/core';

import { GridOptions } from 'ag-grid';

import { IGridBuilderService, IGridOptionsBuilderService } from '../interfaces';
import { Grid } from '../models';
import { GridOptionsBuilderService } from './grid-options-builder.service';

@Injectable()
export class GridBuilderService implements IGridBuilderService {
  private _gridOptions: GridOptions;

  public startBuildingOptions(): IGridOptionsBuilderService {
    this._gridOptions = {};
    const result = new GridOptionsBuilderService(this, this._gridOptions);
    return result;
  }

  public buildGrid<T extends object>(): Grid<T> {
    const result = new Grid<T>(this._gridOptions);
    return result;
  }
}
