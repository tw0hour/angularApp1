import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampReportComponent } from './camp-report.component';

describe('CampReportComponent', () => {
  let component: CampReportComponent;
  let fixture: ComponentFixture<CampReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
