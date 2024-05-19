import { database } from "../../api/database";
import { Injectable } from "@angular/core";
import { DayI } from "@interfaces/day.interface";
import { of } from "rxjs";

@Injectable({
   providedIn: "root",
})
export class DayService {
   constructor() {}

   // TODO: implement real logic
   getDay() {
      const day$ = of({ ...database.day });
      return day$;
   }

   createDay(day: DayI) {
      return database.day = day;
   }

   updateDay(day: DayI) {
      return database.day = day;
   }
}
