export type Func<TResult> = () => TResult;

export type OneArgFunc<T, TResult> = (arg: T) => TResult;
