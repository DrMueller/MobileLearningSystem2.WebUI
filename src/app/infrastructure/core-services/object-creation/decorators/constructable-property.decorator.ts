import { IParameterlessConstructor } from 'app/infrastructure/types/interfaces';

export const CTOR_PROP_KEY_PREFIX = 'ConstructableProperty';

export function ConstructableProperty<T>(ctor: IParameterlessConstructor<T>) {
  return function (target: object, propertyKey: string) {
    Reflect.defineMetadata(CTOR_PROP_KEY_PREFIX, ctor, target, propertyKey);
  };
}
