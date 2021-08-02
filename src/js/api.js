const MEAL_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
const INVOLVEMENT_BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const post = async (endpoint, body = {}) => {
  const response = await fetch(`${INVOLVEMENT_BASE_URL}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
};

export const fetchMeals = async () => {
  const response = await fetch(`${MEAL_BASE_URL}/search.php?f=b`);
  const { meals } = await response.json();
  return meals;
};

export const createApp = async () => {
  let appId = localStorage.getItem('appId');

  if (!appId) {
    const response = await post('apps/');
    appId = await response.text();
    localStorage.setItem('appId', appId);
  }

  return appId;
};

export const fetchLikes = async (appId) => {
  const response = await fetch(`${INVOLVEMENT_BASE_URL}apps/${appId}/likes`);

  return response.json();
};

export const likeMeal = async ({ appId, mealId }) => {
  const response = await post(`apps/${appId}/likes`, {
    item_id: mealId,
  });

  return response.status === 201;
};