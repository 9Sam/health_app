import { Component } from "@angular/core";
import { IconFieldModule } from "primeng/iconfield";

@Component({
   selector: 'h-activity-widget',
   standalone: true,
   imports: [IconFieldModule],
   templateUrl: './activity-widget.component.html',
   styleUrl: './activity-widget.component.scss',
})
export class ActivityWidgetComponent {}
