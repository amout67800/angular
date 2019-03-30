import { Injectable } from '@angular/core';
import { Travel } from '../shared/classes/travel';
import { TRAVELS } from 'src/app/mocks/mock-travels';


@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor() { }

  getTravels(): Travel[] {
    return TRAVELS;
  }
}
