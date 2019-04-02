import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UsersListComponent } from 'src/app/public/components/users-list/users-list.component';
import { TravelsListComponent } from 'src/app/public/components/travels-list/travels-list.component';
import { PlacesListComponent } from 'src/app/public/components/places-list/places-list.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatTableModule
      ],
      declarations: [ 
        TableComponent, 
        UsersListComponent, 
        TravelsListComponent, 
        PlacesListComponent 
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
