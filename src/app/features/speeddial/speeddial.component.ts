import { Component, OnInit } from "@angular/core";
import { MenuItem, MessageService } from "primeng/api";
import { SpeedDialModule } from "primeng/speeddial";
import { ToastModule } from "primeng/toast";

@Component({
   selector: 'h-speeddial',
   standalone: true,
   imports: [SpeedDialModule, ToastModule],
   providers: [MessageService],
   templateUrl: './speeddial.component.html',
   styleUrl: './speeddial.component.scss',
})
export class SpeeddialComponent implements OnInit {
   leftTooltipItems: MenuItem[] = [];

   ngOnInit() {
      this.leftTooltipItems = [
         {
            icon: 'pi pi-pencil',
            iconStyleClass: 'h-speeddial-icon',
            command: () => {
               // this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            },
         },
         {
            icon: 'pi pi-refresh',
            styleClass: 'h-speeddial-icon',
            style: { color: 'green', padding: '20px' },
            command: () => {
               // this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            },
         },
         {
            icon: 'pi pi-trash',
            command: () => {
               // this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            },
         },
      ];
   }
}
