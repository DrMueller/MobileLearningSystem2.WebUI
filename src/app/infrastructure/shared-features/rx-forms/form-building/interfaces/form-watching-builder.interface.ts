import { IRxFormBuilder } from '.';

export interface IFormWatchingBuilder {
  withDebcounceTime(debounceMilliseconds: number): IFormWatchingBuilder;
  buildFormWatcher(): IRxFormBuilder;
}
