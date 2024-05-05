import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdwFoodProgressPreviewComponent } from './mdw-food-progress-preview.component';

describe('MdwFoodProgressPreviewComponent', () => {
  let component: MdwFoodProgressPreviewComponent;
  let fixture: ComponentFixture<MdwFoodProgressPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdwFoodProgressPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MdwFoodProgressPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
