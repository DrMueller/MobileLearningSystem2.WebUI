import { ArrayChangeType } from '../models';

export type ArrayChangedCallback<T> = (target: T[], p: PropertyKey, value: T, changeType: ArrayChangeType) => void;
