/// <reference path="../../../../../../node_modules/reflect-metadata/Reflect.d.ts" />.

import { Injectable } from '@angular/core';

import { IParameterlessConstructor } from 'app/infrastructure/types/interfaces';
import { ObjectUtils } from 'app/infrastructure/utils';

import { CTOR_PROP_KEY_PREFIX } from '../decorators';

@Injectable()
export class ObjectFactoryService {
  public createArray<T>(sourceCollection: any[], ctorFn: IParameterlessConstructor<T>): T[] {
    const result = new Array<T>();
    sourceCollection.forEach(sourceItem => {
      const mappedItem = new ctorFn();
      this.mapDefinedProperties(sourceItem, mappedItem);
      result.push(mappedItem);
    });

    return result;
  }

  public create<T>(source: any, ctorFn: IParameterlessConstructor<T>): T {
    const result = new ctorFn();
    this.mapDefinedProperties(source, result);

    return result;
  }

  private getSourceProperty<T>(source: any, target: T, targetPropKey: string): any {
    const sourceProp = source[targetPropKey];
    const ctor = <IParameterlessConstructor<any>>Reflect.getMetadata(CTOR_PROP_KEY_PREFIX, target, targetPropKey);

    if (ObjectUtils.isNullOrUndefined(ctor)) {
      return sourceProp;
    }

    if (sourceProp instanceof Array) {
      const result = new Array();
      const sourceArray = <Array<any>>sourceProp;

      sourceArray.forEach(sourceElement => {
        const targetObj = new ctor();
        this.mapDefinedProperties(sourceElement, targetObj);
        result.push(targetObj);
      });

      return result;
    } else {
      const targetObj = new ctor();
      this.mapDefinedProperties(sourceProp, targetObj);
      return targetObj;
    }
  }

  private mapDefinedProperties<T>(source: Object, target: T): void {
    const sourceProperties = Object.getOwnPropertyNames(source);

    sourceProperties.forEach(sourcePropKey => {
      const sourceProp = this.getSourceProperty(source, target, sourcePropKey);
      target[sourcePropKey] = sourceProp;
    });
  }

}
