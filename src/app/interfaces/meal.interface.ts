import { FoodI } from "./food.interface";

export interface MealI {
   id: string;
   name: string;
   description: string;
   food: FoodI[];
}