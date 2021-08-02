const MEAL_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMeals = async () => {
  const response = await fetch(`${MEAL_BASE_URL}/search.php?f=b`);
  const { meals } = await response.json();
  return meals;
};