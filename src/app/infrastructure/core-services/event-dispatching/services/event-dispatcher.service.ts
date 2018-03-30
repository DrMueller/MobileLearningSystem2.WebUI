import { Injectable } from '@angular/core';

import { EventCallback } from '../types';
import { EventListenerDictonary, EventListenerEntry } from '../models';

@Injectable()
export class EventDispatcherService {
  private readonly _dict = new EventListenerDictonary();

  constructor() {
  }

  public registerListener(eventName: string, callback: EventCallback): void {
    const entry = new EventListenerEntry(eventName, callback);
    this._dict.addListener(entry);
  }

  public notifyListeners(eventName: string, sender: any, parameters: any | null = null): void {
    const listeners = this._dict.getListeners(eventName);

    listeners.forEach(l => {
      l.callback(sender, parameters);
    });
  }
}
