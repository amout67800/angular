import { Injectable } from '@angular/core';
import { Place } from '../shared/classes/place';
import { PLACES } from '../mocks/mock-places';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }

  getPlaces(): Place[] {
    return PLACES;
  }
}
