import * as DayActions from "../actions/day.actions";
import { DayI } from "@interfaces/day.interface";
import { createReducer, on } from "@ngrx/store";

export const initialState = {} as DayI;

export const dayReducer = createReducer(
   initialState,
   on(DayActions.loadDay, (state) => state),
   on(DayActions.createDay, (state, action) => {
      state = action.day;

      return state;
   }),
   on(DayActions.updateDay, (state, action) => {
      state = action.day;

      return state;
   }),
   on(DayActions.removeDay, (state, action) => {
      state = {} as DayI;

      return state;
   })
);
