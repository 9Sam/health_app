import { Component, Input } from '@angular/core';

@Component({
  selector: 'h-summary-counter',
  standalone: true,
  imports: [],
  templateUrl: './summary-counter.component.html',
  styleUrl: './summary-counter.component.scss'
})
export class SummaryCounterComponent {
   @Input() text = "";
   @Input() amount = 0;
}
