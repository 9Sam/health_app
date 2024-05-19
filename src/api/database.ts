import { DayI } from "../app/interfaces/day.interface";

interface FoodI {
   id: string;
   icon: string;
   name: string;
   description: string;
   category: string;
   properties: {
      amount: number;
      calories: number;
      proteins: number;
      carbs: number;
      sugars: number;
      fats: number;
   };
}

interface DatabaseI {
   day: DayI;
   food: FoodI[];
   meal: any[];
   activity: any[];
}

export const database: DatabaseI = {
   day: {
      date: '2022-09-21',
      actualCalories: 1800,
      consumedCalories: 1230,
      burnedCalories: 865,
      meals: [
         {
            id: '1',
            type: 'breakfast',
            consumedCalories: 0,
            targetCalories: 0,
         },
      ],
      activities: [
         {
            icon: 'mdi:walk',
            name: 'walk',
            calories: 0,
            duration: 0,
            note: '',
         },
      ],
      waterGlass: 0,
      notes: [],
   },
   food: [
      {
         id: '1',
         icon: 'mdi:food',
         name: 'Food',
         description: 'Food',
         category: '',
         properties: {
            amount: 0,
            calories: 0,
            proteins: 0,
            carbs: 0,
            sugars: 0,
            fats: 0,
         },
      },
   ],
   meal: [],
   activity: [],
};
