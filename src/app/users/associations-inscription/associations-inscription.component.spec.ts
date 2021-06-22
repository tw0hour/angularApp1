import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsInscriptionComponent } from './associations-inscription.component';

describe('AssociationsInscriptionComponent', () => {
  let component: AssociationsInscriptionComponent;
  let fixture: ComponentFixture<AssociationsInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationsInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationsInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
