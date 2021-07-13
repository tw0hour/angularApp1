import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliversDeliveryComponent } from './delivers-delivery.component';

describe('DeliversDeliveryComponent', () => {
  let component: DeliversDeliveryComponent;
  let fixture: ComponentFixture<DeliversDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliversDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliversDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
