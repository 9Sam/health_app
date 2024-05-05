import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MealDayWidgetComponent } from "./meal-day-widget.component";

describe("MealDayWidgetComponent", () => {
   let component: MealDayWidgetComponent;
   let fixture: ComponentFixture<MealDayWidgetComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [MealDayWidgetComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(MealDayWidgetComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });
});
