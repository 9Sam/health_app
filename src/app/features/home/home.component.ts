import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SummaryComponent } from "../summary/summary.component";
import { MealDayWidgetComponent } from "../widgets/meal-day-widget/meal-day-widget.component";
import { SkeletonModule } from "primeng/skeleton";

@Component({
   selector: "h-home",
   standalone: true,
   templateUrl: "./home.component.html",
   styleUrl: "./home.component.scss",
   imports: [
      ButtonModule,
      SummaryComponent,
      MealDayWidgetComponent,
      SkeletonModule,
   ],
})
export class HomeComponent {}
