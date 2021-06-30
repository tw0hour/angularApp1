import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampUpdateComponent } from './camp-update.component';

describe('CampUpdateComponent', () => {
  let component: CampUpdateComponent;
  let fixture: ComponentFixture<CampUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
