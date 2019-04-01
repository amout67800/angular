import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Place } from '../../../core/classes/place';
import { PlaceService } from '../../../services/place.service';

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
  dataSource: any;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.getPlaces();
    this.dataSource = new MatTableDataSource(this.places);
  }

  getPlaces(): void {
    this.places = this.placeService.getPlaces();
  }
}
