import { Injectable } from '@angular/core';

import { EnumKeyValue } from '../models';

@Injectable()
export class EnumService {

  public getKeyValues(enumType: any): EnumKeyValue[] {
    const result = this.getEnumKeyValues(enumType);
    return result;
  }

  public parseEnumEntry(enumType: any, str: string): any {
    const enumKeyValues = this.getEnumKeyValues(enumType);

    const enumEntry = enumKeyValues.find(f => f.value.toLowerCase() === str.toLowerCase())!;
    return enumEntry.key;
  }

  private getEnumKeyValues(enumType: any): EnumKeyValue[] {
    const parsedEnumKeys = Object.keys(enumType).map(f => {
      return parseInt(f, 2);
    });

    const numericEnumKeys = parsedEnumKeys.filter(f => {
      return f.toString() !== 'NaN';
    });

    const result = numericEnumKeys.map(f => {
      const enumValue = enumType[f];
      return new EnumKeyValue(f, enumValue);
    });

    return result;
  }
}
