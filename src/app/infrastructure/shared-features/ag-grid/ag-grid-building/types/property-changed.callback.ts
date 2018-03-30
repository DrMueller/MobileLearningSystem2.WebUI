export type PropertyChangedCallback<T> = (target: T, p: PropertyKey, value: any, receiver: any) => void;
