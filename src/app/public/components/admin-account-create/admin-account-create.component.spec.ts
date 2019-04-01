import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountCreateComponent } from './admin-account-create.component';

describe('AdminAccountCreateComponent', () => {
  let component: AdminAccountCreateComponent;
  let fixture: ComponentFixture<AdminAccountCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccountCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
