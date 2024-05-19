import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { MenuModule } from "primeng/menu";

@Component({
   selector: 'h-options-bar',
   standalone: true,
   imports: [ButtonModule, MenuModule],
   templateUrl: './options-bar.component.html',
   styleUrl: './options-bar.component.scss',
})
export class OptionsBarComponent {}
