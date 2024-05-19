import { DayI } from "../../interfaces/day.interface";
import { OptionsBarComponent } from "../options-bar/options-bar.component";
import { SpeeddialComponent } from "../speeddial/speeddial.component";
import { SummaryComponent } from "../summary/summary.component";
import { ActivityWidgetComponent } from "../widgets/activity-widget/activity-widget.component";
import { MealDayWidgetComponent } from "../widgets/meal-day-widget/meal-day-widget.component";
import {
   Component,
   inject,
   Signal,
   signal
   } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Store } from "@ngrx/store";
import * as DayActions from "@store/actions/day.actions";
import { MenuItem } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { SkeletonModule } from "primeng/skeleton";
import { Observable } from "rxjs";

@Component({
   selector: 'h-home',
   standalone: true,
   templateUrl: './home.component.html',
   styleUrl: './home.component.scss',
   imports: [
      ButtonModule,
      SummaryComponent,
      MealDayWidgetComponent,
      SkeletonModule,
      ActivityWidgetComponent,
      OptionsBarComponent,
      SpeeddialComponent,
   ],
})
export class HomeComponent {
   private readonly store: Store<{ day: any }> = inject(Store);
   leftTooltipItems: MenuItem[] = [];

   daySig: Signal<DayI> = signal({} as DayI);

   constructor() {
      this.store.dispatch(DayActions.loadDay());
      this.store.select('day').subscribe((day) => {
         console.log(day);

         if (day && day instanceof Observable) {
            this.daySig = toSignal(day);
         }
      });
   }
}
