import { DayI } from "@interfaces/day.interface";
import { createAction, props } from "@ngrx/store";

const component = '[Day Component]';

export const loadDay = createAction(`${component} Load Day`);

export const loadDaySuccess = createAction(
   `${component} Load Day Success`,
)

export const loadDayFailure = createAction(
   `${component} Load Day Failure`,
);

export const createDay = createAction(
   `${component} Creates a Day`,
   props<{ day: DayI }>()
);

export const updateDay = createAction(
   `${component} Update Day data`,
   props<{ day: DayI }>(),
);

export const removeDay = createAction(
   `${component} Remove Day`,
   props<{ id: string }>()
);
