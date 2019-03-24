import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() columns: any[];
  @Input() actions: any[];
  @Input() buttons: any[];
  @Input() addTravel: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[];
  displayedActions: string[];

  constructor() {}

  ngOnInit() {
    this.displayedColumns = this.columns.map(column => column.name);
    this.displayedActions = this.actions.map(action => action.name);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}