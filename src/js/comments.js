import * as API from './api.js';

const displayCommentsPopup = async ({ mealId }) => {
  const meal = await API.getMealById(mealId);
  const modal = document.querySelector('.modal');
  const details = document.createElement('div');
  details.classList.add('details');

  details.innerHTML = `
    <img src='${meal.strMealThumb}' class="details-image">
    <h2>${meal.strMeal}</h2>
    <div class="meal-info">
      <div><span class="label">Category: </span><span>${meal.strCategory}</span></div>
      <div><span class="label">Area: </span><span>${meal.strArea}</span></div>
      <div><span class="label">Recipe: </span><a href='${meal.strSource}' target="blank">Recipe Link</a></div>
      <div><span class="label">Video Instruction: </span><a href='${meal.strYoutube}' target="blank">YouTube Link</a></div>
    </div>
    `;
  modal.append(details);
};

export default displayCommentsPopup;