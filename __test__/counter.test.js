import { countMeals } from '../src/js/homepage.js';
import { countComments } from '../src/js/comments.js';

jest.mock('../src/js/api.js');

const { fetchMeals, getComments } = require('../src/js/api.js');

const appId = 'ocnJ2hC1raf2nyITSPeo';
const mealId = 52767;

describe('Counter', () => {
  test('should count the number of items', async () => {
    const items = await fetchMeals();

    const count = countMeals(items);

    expect(count).toBe(30);
  });

  test('should count the number of comments', async () => {
    const items = await getComments(appId, mealId);

    const count = countComments(items);

    expect(count).toBe(4);
  });
});
