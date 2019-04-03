import { Injectable } from '@angular/core';
/* import {} from '@types/google.analytics'; */

declare let ga: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsEventsService {

  constructor() { }

  public emitEvent(eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {
      ga('send', 'event', { eventCategory, eventLabel, eventAction, eventValue });
  }
}
