import * as API from './api.js';

export const countComments = async (appId, mealId) => {
  const comment = await API.getComments(appId, mealId);
  return comment.length;
};

const renderComments = async (appId, mealId) => {
  const comment = await API.getComments(appId, mealId);
  return `
  <div class="comments">
  <h3>Comments (<span id="comment-count">${await countComments(appId, mealId)}</span>)</h3>
  <ul id='comment-list'>
   ${comment.map((comments) => `<li class="comment-line"><span>${comments.creation_date}</span> <span>${comments.username}: ${comments.comment}</span></li>`).join('')}
  </ul>
</div>
`;
};

const displayCommentsPopup = async ({ mealId, appId }) => {
  const meal = await API.getMealById(mealId);
  const modal = document.querySelector('#modal-content');
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

  const commentSection = document.createElement('div');
  commentSection.classList.add('details');
  commentSection.innerHTML = await renderComments(appId, mealId);

  details.append(commentSection);

  modal.append(details);

  const form = document.createElement('form');
  form.classList.add('form');
  form.action = '#';
  form.method = 'post';
  form.innerHTML = `
    <h3>Add a comment</h3>
    <input type="text" placeholder='Your name' reqiured>
    <textarea id="text" name="text" rows="4" cols="50" placeholder="Your insights" reqiured></textarea>
    <button type="submit" class="button primary-button">Comment</button>
  `;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const endpoint = `apps/${appId}/comments?item_id=${mealId}`;
    const body = {
      item_id: mealId,
      username: event.target.children[1].value,
      comment: event.target.children[2].value,
    };
    const response = await API.post(endpoint, body);
    if (response.status === 201) {
      commentSection.innerHTML = await renderComments(appId, mealId);
      event.target.children[1].value = '';
      event.target.children[2].value = '';
      event.target.children[1].focus();
    }
  });

  details.append(form);
};

export default displayCommentsPopup;