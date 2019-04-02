import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsButtonsComponent } from './actions-buttons.component';
import { MatDialogModule } from '@angular/material';

describe('ActionsButtonsComponent', () => {
  let component: ActionsButtonsComponent;
  let fixture: ComponentFixture<ActionsButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
      declarations: [ ActionsButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
