import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationUpdateComponent } from './association-update.component';

describe('AssociationUpdateComponent', () => {
  let component: AssociationUpdateComponent;
  let fixture: ComponentFixture<AssociationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
