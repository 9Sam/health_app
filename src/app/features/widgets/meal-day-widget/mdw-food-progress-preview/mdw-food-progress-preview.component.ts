import { Component, Input } from "@angular/core";
import {
   CircleProgressOptions,
   NgCircleProgressModule,
} from "ng-circle-progress";

@Component({
   selector: "h-mdw-food-progress-preview",
   standalone: true,
   imports: [NgCircleProgressModule],
   providers: [CircleProgressOptions],
   templateUrl: "./mdw-food-progress-preview.component.html",
   styleUrl: "./mdw-food-progress-preview.component.scss",
})
export class MdwFoodProgressPreviewComponent {
   @Input() image: string = "";
}
