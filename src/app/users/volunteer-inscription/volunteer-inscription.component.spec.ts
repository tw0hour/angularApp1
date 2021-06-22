import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerInscriptionComponent } from './volunteer-inscription.component';

describe('VolunteerInscriptionComponent', () => {
  let component: VolunteerInscriptionComponent;
  let fixture: ComponentFixture<VolunteerInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
