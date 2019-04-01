import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Travel } from '../../../core/classes/travel';
import { TravelService } from '../../../services/travel.service';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit {
  
  travels: Travel[];

  newTravel="../travel/create";
  columnsToDisplay: any[] = [
    { name: 'id',       label: 'No.' },
    { name: 'name',     label: 'Name' },
    { name: 'country',  label: 'Country' }
  ];
  actionsToDisplay: any[] = [
    { name: 'actions', visibility: true }
  ];
  buttonsToDisplay: any[] = [
    { name: 'add',     label: 'New',     visibility: true },
    { name: 'details', label: 'Details', visibility: true },
    { name: 'edit',    label: 'Edit',    visibility: true },
    { name: 'del',     label: 'Delete',  visibility: true }
  ];
  dataSource: any;

  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.getTravels();
    this.dataSource = new MatTableDataSource(this.travels);
  }

  getTravels(): void {
    this.travels = this.travelService.getTravels();
  }
}
