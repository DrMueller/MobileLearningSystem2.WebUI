import { ArrayChangeType } from '../models/array-change-type.enum';
import { ArrayChangedCallback } from '../types';

export class ObservableArrayProxyHandler<TArray extends Array<any>> implements ProxyHandler<TArray>  {
  private _array: TArray;

  public constructor(private callback: ArrayChangedCallback<TArray>) {
  }

  public set(target: TArray, p: PropertyKey, value: any, _receiver: any): boolean {
    this._array = <TArray>target.map(x => Object.assign({}, x));
    target[p] = value;
    this.checkInsert(target, p, value);
    this.checkDelete(target, p, value);
    return true;
  }

  private checkDelete(target: TArray, p: PropertyKey, value: any): void {
    if (p.toString() === 'length') {
      const numberValue = Number(value);
      if (this._array.length > numberValue) {
        this.onCallback(target, p, value, ArrayChangeType.EntryDeleted);
      }
    }
  }

  private checkInsert(target: TArray, p: PropertyKey, value: any): void {
    const numberValue = Number(p);
    if (numberValue.toString() !== 'Nan') {
      if (numberValue === this._array.length) {
        this.onCallback(target, p, value, ArrayChangeType.EntryInserted);
      }
    }
  }

  private onCallback(target: TArray, p: PropertyKey, value: any, changeType: ArrayChangeType): void {
    this.callback(target, p, value, changeType);
  }
}
