import displayHomePage from './homepage.js';
import * as API from './api.js';

export default async () => {
  const meals = await API.fetchMeals();
  const formattedMeals = meals.map(({ idMeal: id, strMeal: name, strMealThumb: src }) => ({
    id,
    name,
    src,
  }));

  displayHomePage({ meals: formattedMeals });
};
