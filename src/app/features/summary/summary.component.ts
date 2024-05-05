import {
   Component,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
   CircleProgressOptions,
   NgCircleProgressModule,
} from "ng-circle-progress";
import { CardModule } from "primeng/card";
import { SummaryCounterComponent } from "./summary-counter/summary-counter.component";

@Component({
   selector: "h-summary",
   standalone: true,
   providers: [CircleProgressOptions],
   templateUrl: "./summary.component.html",
   styleUrl: "./summary.component.scss",
   imports: [
      CardModule,
      FormsModule,
      NgCircleProgressModule,
      SummaryCounterComponent,
   ],
})
export class SummaryComponent {
   value = 30;
}
