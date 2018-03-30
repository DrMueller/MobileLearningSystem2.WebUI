import { EventCallback } from '../types';

export class EventListenerEntry {
  constructor(public eventName: string, public callback: EventCallback) {
  }
}
