import * as DayActions from "../actions/day.actions";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DayService } from "@services/day.service";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

@Injectable()
export class DayEffects {
   loadData$ = createEffect(() =>
      this.actions$.pipe(
         ofType(DayActions.loadDay),
         switchMap(() => this.dayService.getDay()),
         map((day) => DayActions.createDay({ day: day })),
      )
   );

   constructor(private actions$: Actions, private dayService: DayService) {}
}
