import { Component } from '@angular/core';
import { MdwFoodProgressPreviewComponent } from './mdw-food-progress-preview/mdw-food-progress-preview.component';

@Component({
  selector: 'h-meal-day-widget',
  standalone: true,
  imports: [MdwFoodProgressPreviewComponent],
  templateUrl: './meal-day-widget.component.html',
  styleUrl: './meal-day-widget.component.scss'
})
export class MealDayWidgetComponent {
   meals  = [
      {
         name: 'Breakfast',
         requiredCalories: 549,
         actualCalories: 0,
         image: 'assets/icons/breakfast.svg'
      },
      {
         name: 'Lunch',
         requiredCalories: 549,
         actualCalories: 0,
         image: 'assets/icons/lunch.svg'
      },
      {
         name: 'Dinner',
         requiredCalories: 549,
         actualCalories: 0,
         image: 'assets/icons/salad.svg'
      },
      {
         name: 'Snack',
         requiredCalories: 549,
         actualCalories: 0,
         image: 'assets/icons/apple.svg'
      }
   ];
}
