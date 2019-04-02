import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsListComponent } from './travels-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TableComponent } from '../../../shared/components/table/table.component';
import { MatTableModule } from '@angular/material';

describe('TravelsListComponent', () => {
  let component: TravelsListComponent;
  let fixture: ComponentFixture<TravelsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule, 
        ReactiveFormsModule,
        MatTableModule
      ],
      declarations: [ TravelsListComponent, TableComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
