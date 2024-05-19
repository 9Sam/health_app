interface MealI {
   id: string;
   type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
   consumedCalories: number;
   targetCalories: number;
}

interface ActivityI {
   icon: string;
   name: string;
   calories: number;
   duration: number;
   note: string;
}

export interface DayI {
   actualCalories: number;
   consumedCalories: number;
   burnedCalories: number;
   date: string;
   meals: MealI[];
   activities: ActivityI[];
   waterGlass: number;
   notes: string[];
}
