import { Injectable } from '@angular/core';
import { Place } from '../../core/classes/place';
import { PLACES } from '../../core/mocks/mock-places';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }

  getPlaces(): Place[] {
    return PLACES;
  }
}
