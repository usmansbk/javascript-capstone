export const fetchMeals = () => Promise.resolve(new Array(30).fill({
  id: 0,
  name: 'Mock',
  src: 'https://mock',
}));

export const getComments = () => Promise.resolve(new Array(4).fill({
  item_id: 52767,
  username: 'Jane',
  comment: 'Hello',
}));

export default {};