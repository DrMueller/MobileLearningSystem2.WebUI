import { GridOptions } from 'ag-grid';

import { ObservableArrayProxyHandler } from '../handlers/observable-array-proxy.handler';
import { ObversableProxyHandler } from '../handlers/obversable-proxy.handler';
import { ArrayChangeType } from './array-change-type.enum';
import { OneArgFunc } from 'app/infrastructure/types/callbacks';

export class Grid<TModel extends object> {
  private _isGridReady = false;
  private readonly _allEntries: TModel[];
  private readonly _entries: TModel[]; // This array should not get changed, since it is in fact a Proxy

  public constructor(public gridOptions: GridOptions) {
    gridOptions.onGridReady = this.gridReady.bind(this);
    const proxyHandler = new ObservableArrayProxyHandler<TModel[]>(this.onModelsArrayChanged.bind(this));
    this._entries = new Proxy(new Array<TModel>(), proxyHandler);
    this._allEntries = new Proxy(new Array<TModel>(), proxyHandler);
    this.updateRowDataWhenGridReady();
  }

  public filterEntries(filterCallback: OneArgFunc<TModel, boolean>): void {
    const filteredEntries = this._allEntries.filter(entry => {
      return filterCallback(entry);
    });

    this.alignEntries(this._entries, filteredEntries);
  }

  public get entries(): TModel[] {
    return this._entries;
  }

  public initializeEntries(entries: TModel[]): void {
    this.alignEntries(this._allEntries, entries);
    this.alignEntries(this._entries, entries);
  }

  public onModelChanged(_target: TModel, _p: PropertyKey, _value: any, _receiver: any): void {
    this.updateRowDataWhenGridReady();
  }

  private alignEntries(originalArray: TModel[], newEntries: TModel[]): void {
    originalArray.splice(0, originalArray.length);
    originalArray.push(...newEntries);
  }

  private createProxy(entry: TModel): TModel {
    const entryProxyHandler = new ObversableProxyHandler<TModel>(this.onModelChanged.bind(this));
    const proxy = new Proxy(entry, entryProxyHandler);
    return proxy;
  }

  private gridReady(): void {
    this._isGridReady = true;
  }

  private onModelsArrayChanged(_: TModel, p: PropertyKey, value: any, changeType: ArrayChangeType): void {
    if (changeType === ArrayChangeType.EntryInserted) {
      this._entries[p] = this.createProxy(value);
    }

    this.updateRowDataWhenGridReady();
  }

  private updateRowDataWhenGridReady(): void {
    if (this._isGridReady) {
      this.gridOptions.api!.setRowData(this._entries);
    } else {
      const interval = setInterval(() => {
        if (this._isGridReady) {
          clearInterval(interval);
          this.gridOptions.api!.setRowData(this._entries);
        }
      }, 100);
    }
  }
}
