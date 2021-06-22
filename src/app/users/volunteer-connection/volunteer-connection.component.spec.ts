import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerConnectionComponent } from './volunteer-connection.component';

describe('VolunteerConnectionComponent', () => {
  let component: VolunteerConnectionComponent;
  let fixture: ComponentFixture<VolunteerConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
