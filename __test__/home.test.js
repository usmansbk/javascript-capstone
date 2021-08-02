import { countItems } from '../src/js/homepage.js';

jest.mock('../src/js/api.js');

const { fetchMeals } = require('../src/js/api.js');

describe('Counter', () => {
  test('should count the number of items', async () => {
    const items = await fetchMeals();

    const count = countItems(items);

    expect(count).toBe(30);
  });
});
