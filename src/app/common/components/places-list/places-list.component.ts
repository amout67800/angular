import { Component, OnInit } from '@angular/core';
import { PLACES } from './../../../mocks/mock-places';
import { MatTableDataSource } from '@angular/material';
import { Place } from 'src/app/shared/classes/place';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places: Place[];

  // Table ressources
  newPlace="../place/create"
  columnsToDisplay: any[] = [
    { name: 'id',       label: 'No.' },
    { name: 'country',  label: 'Country' },
    { name: 'city',     label: 'City' },
    { name: 'name',     label: 'Name' }
  ];
  dataSource = new MatTableDataSource(PLACES);

  constructor() { }

  ngOnInit() {
  }
}
