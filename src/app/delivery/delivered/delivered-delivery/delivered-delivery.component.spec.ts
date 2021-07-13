import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredDeliveryComponent } from './delivered-delivery.component';

describe('DeliveredDeliveryComponent', () => {
  let component: DeliveredDeliveryComponent;
  let fixture: ComponentFixture<DeliveredDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveredDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
