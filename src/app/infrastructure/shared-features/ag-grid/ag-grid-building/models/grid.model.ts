import { GridOptions } from 'ag-grid';

import { ObservableArrayProxyHandler } from '../handlers/observable-array-proxy.handler';
import { ObversableProxyHandler } from '../handlers/obversable-proxy.handler';
import { ArrayChangeType } from './array-change-type.enum';
import { OneArgFunc } from 'app/infrastructure/types/callbacks';

export class Grid<T extends object> {
  private _allEntries: T[];
  private _isGridReady = false;
  private readonly _entries: T[];

  public constructor(public gridOptions: GridOptions) {
    gridOptions.onGridReady = this.gridReady.bind(this);
    const proxyHandler = new ObservableArrayProxyHandler<T[]>(this.gridArrayChanged.bind(this));
    this._entries = new Proxy(new Array<T>(), proxyHandler);
    this.updateRowDataWhenGridReady();
  }

  public filterEntries(filter: OneArgFunc<T, boolean>): void {
    const filteredEntries = this._allEntries.filter(entry => {
      return filter(entry);
    });

    this.alignEntries(filteredEntries);
  }

  public get entries(): T[] {
    return this._entries;
  }

  public gridEntryChanged(_target: T, _p: PropertyKey, _value: any, _receiver: any): void {
    this.updateRowDataWhenGridReady();
  }

  public initializeEntries(entries: T[]): void {
    this.alignEntries(entries);
    this._allEntries = new Array<T>();
    this._allEntries.push(...this.entries);
  }

  private alignEntries(entries: T[]): void {
    this.entries.splice(0, this.entries.length);
    this.entries.push(...entries);
  }

  private createProxy(entry: T): T {
    const entryProxyHandler = new ObversableProxyHandler<T>(this.gridEntryChanged.bind(this));
    const proxy = new Proxy(entry, entryProxyHandler);
    return proxy;
  }

  private gridArrayChanged(_target: T, p: PropertyKey, value: any, changeType: ArrayChangeType): void {
    if (changeType === ArrayChangeType.EntryInserted) {
      this._entries[p] = this.createProxy(value);
    }

    this.updateRowDataWhenGridReady();
  }

  private gridReady(): void {
    this._isGridReady = true;
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
