import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsConnectionComponent } from './associations-connection.component';

describe('AssociationsConnectionComponent', () => {
  let component: AssociationsConnectionComponent;
  let fixture: ComponentFixture<AssociationsConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationsConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationsConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
