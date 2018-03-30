import { EventListenerEntry } from '.';

export class EventListenerDictonary {
  private readonly _listeners = new Array<EventListenerEntry>();

  public addListener(listener: EventListenerEntry): void {
    this._listeners.push(listener);
  }

  public removeListener(listener: EventListenerEntry): void {
    const index = this._listeners.indexOf(listener);
    if (index > -1) {
      this._listeners.splice(index, 1);
    }
  }

  public getListeners(eventName: string): EventListenerEntry[] {
    const result = this._listeners.filter(f => f.eventName === eventName);
    return result;
  }
}
