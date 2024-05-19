import { routes } from "./app.routes";
import { DayEffects } from "./store/effects/day.effects";
import { dayReducer } from "./store/reducers/day.reducer";
import { ApplicationConfig } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";


export const appConfig: ApplicationConfig = {
   providers: [
      provideRouter(routes),
      provideStore({
         day: dayReducer,
      }),
      provideEffects([DayEffects]),
      provideAnimations(),
   ],
};
