import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCounterComponent } from './summary-counter.component';

describe('SummaryCounterComponent', () => {
  let component: SummaryCounterComponent;
  let fixture: ComponentFixture<SummaryCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
