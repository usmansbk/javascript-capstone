const displayCommentsPopup = async ({ mealId, appId }) => {
  const mealInfo = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const formattedInfo = await mealInfo.json();
  const meal = formattedInfo.meals[0];
  return `
  <div class='wrapper'>
  <div id="close" class="close"><span class="material-icons" >
  close
  </span></div>
  <img src='${meal.strMealThumb}' class="details-image">
  <h2>${meal.strMeal}</h2>
  <div class="meal-info">
    <div><span>Area: </span><span>${meal.strArea}</span></div>
    <div><span>Category: </span><span>${meal.strCategory}</span></div>
    <span>Instructions: </span><span class="instructions">${meal.strInstructions}</span>
  </div>
  </div>`;
};

export default displayCommentsPopup;