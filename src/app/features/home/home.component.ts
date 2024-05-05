import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SummaryComponent } from "../summary/summary.component";

@Component({
    selector: "h-home",
    standalone: true,
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss",
    imports: [ButtonModule, SummaryComponent]
})
export class HomeComponent {}
