export const fetchMeals = () => Promise.resolve(new Array(30).fill({
  id: 0,
  name: 'Mock',
  src: 'https://mock',
}));

export default {};