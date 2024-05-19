import { SummaryCounterComponent } from "./summary-counter/summary-counter.component";
import { DayI } from "../../interfaces/day.interface";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { CardModule } from "primeng/card";
import {
   CircleProgressOptions,
   NgCircleProgressModule,
} from 'ng-circle-progress';

@Component({
   selector: 'h-summary',
   standalone: true,
   providers: [CircleProgressOptions],
   templateUrl: './summary.component.html',
   styleUrl: './summary.component.scss',
   imports: [
      CardModule,
      FormsModule,
      NgCircleProgressModule,
      SummaryCounterComponent,
   ],
})
export class SummaryComponent {
   private readonly store: Store<{ day: DayI }> = inject(Store);

   value = 30;
   day: DayI = {} as DayI;

   constructor() {
      this.store.select('day').subscribe((day) => {
         this.day = day;
      });
   }

   getCaloriesNumber() {
      return this.day.actualCalories.toString();
   }
}
