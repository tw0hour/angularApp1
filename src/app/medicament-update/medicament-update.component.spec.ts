import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentUpdateComponent } from './medicament-update.component';

describe('MedicamentUpdateComponent', () => {
  let component: MedicamentUpdateComponent;
  let fixture: ComponentFixture<MedicamentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
