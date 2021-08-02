import displayHomePage from './homepage.js';
import displayCommentsPopup from './comments.js';
import * as API from './api.js';

export default async () => {
  const appId = 'fakeId' || await API.createApp();
  const meals = await API.fetchMeals();
  const likes = [] || await API.fetchLikes(appId);

  const formattedMeals = meals.map(({ idMeal: id, strMeal: name, strMealThumb: src }) => ({
    id,
    name,
    src,
  }));

  likes.forEach((involvement) => {
    const meal = formattedMeals.find((elem) => elem.id === involvement.item_id);
    meal.likes = involvement.likes;
  });

  const likeMeal = (mealId) => API.likeMeal({ appId, mealId });

  const onPressCommentsButton = (mealId) => displayCommentsPopup({ mealId, appId });

  displayHomePage({ meals: formattedMeals, likeMeal, onPressCommentsButton });
};
