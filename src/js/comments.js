import * as API from './api.js';

export const countComments = (comments = []) => comments.length;

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
      <div class="details">
        <div class="comments">
          <h3>Comments (<span id="comment-count">0</span>)</h3>
          <ul id='comment-list'></ul>
      </div>
      </div>
      <form>
        <h3>Add a comment</h3>
        <input type="text" placeholder='Your name' reqiured>
        <textarea id="text" name="text" rows="4" cols="50" placeholder="Your insights" reqiured></textarea>
        <button type="submit" class="button primary-button">Comment</button>
      </form>
    </div>
   `;

  const renderComments = async () => {
    const comments = await API.getComments(appId, mealId);
    const counter = details.querySelector('#comment-count');
    counter.innerText = countComments(comments);

    const list = details.querySelector('ul');
    list.innerHTML = '';

    comments.forEach((involvement) => {
      const li = document.createElement('li');
      li.classList.add('comment-line');
      li.innerHTML = `<span>${involvement.creation_date}</span> <span>${involvement.username}: ${involvement.comment}</span>`;
      list.appendChild(li);
    });
  };

  modal.append(details);

  const form = document.querySelector('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
      item_id: mealId,
      username: event.target.children[1].value,
      comment: event.target.children[2].value,
    };
    const isCreated = await API.createComment({
      appId,
      mealId,
      data,
    });

    if (isCreated) {
      await renderComments();
      form.reset();
      event.target.children[1].focus();
    }
  });

  await renderComments();
};

export default displayCommentsPopup;