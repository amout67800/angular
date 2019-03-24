import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Travel } from '../classes/travel';
import { TRAVELS } from 'src/app/mocks/mock-travels';


@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor() { }

  getTravels(): Observable<Travel[]> {
    return of(TRAVELS);
  }
}
