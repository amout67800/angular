import { Injectable } from '@angular/core';
import { Travel } from '../../core/classes/travel';
import { TRAVELS } from '../../core/mocks/mock-travels';


@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor() { }

  getTravels(): Travel[] {
    return TRAVELS;
  }
}
