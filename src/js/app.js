import displayHomePage from './homepage.js';
import displayCommentsPopup from './comments.js';
import * as API from './api.js';

const formatMeals = ({ meals = [], likes = [] }) => {
  const formattedMeals = meals.map(({ idMeal: id, strMeal: name, strMealThumb: src }) => ({
    id,
    name,
    src,
  }));

  likes.forEach((involvement) => {
    const meal = formattedMeals.find((elem) => `${elem.id}` === involvement.item_id);
    if (meal) {
      meal.likes = involvement.likes;
    }
  });

  return formattedMeals;
};

export default async () => {
  const appId = await API.createApp();
  const meals = await API.fetchMeals();
  const likes = await API.fetchLikes(appId);

  displayHomePage({
    meals: formatMeals({ meals, likes }),
    onPressLikeButton: (mealId) => API.likeMeal({ appId, mealId }),
    onPressCommentsButton: (mealId) => displayCommentsPopup({ mealId, appId }),
  });
};
