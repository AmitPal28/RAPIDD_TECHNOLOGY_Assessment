import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiChartComponent } from './pi-chart.component';

describe('PiChartComponent', () => {
  let component: PiChartComponent;
  let fixture: ComponentFixture<PiChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiChartComponent]
    });
    fixture = TestBed.createComponent(PiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
