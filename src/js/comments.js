import * as API from './api.js';

export const countComments = (comments = []) => comments.length;

const displayCommentsPopup = async ({ mealId, appId }) => {
  const meal = await API.getMealById(mealId);
  const modal = document.querySelector('#modal-content');
  modal.innerHTML = `
    <div class="involvement-container">
      <section>
        <img src='${meal.strMealThumb}' class="meal-image" />
        <h2 class="section-title">${meal.strMeal}</h2>
        <ul class="meal-info">
          <li><span class="label">Category:</span> ${meal.strCategory}</li>
          <li><span class="label">Area:</span> ${meal.strArea}</li>
          <li><span class="label">Recipe:</span> <a href='${meal.strSource}' target="blank">Recipe Link</a></li>
          <li><span class="label">Video Instruction:</span> <a href='${meal.strYoutube}' target="blank">YouTube Link</a></li>
        </ul>
      </section>
      <section>
        <h3 class="section-title">Comments (<span id="comment-count">0</span>)</h3>
        <ul class="involvement-list" id='comment-list'></ul>
      </section>
      <section>
        <h3 class="section-title">Add a comment</h3>
        <form>
          <input type="text" name="username" placeholder='Your name' required />
          <textarea name="comment" rows="4" placeholder="Your insights" required></textarea>
          <button type="submit" class="primary-button">Comment</button>
        </form>
      </section>
    </div>
   `;

  const renderComments = async () => {
    const comments = await API.getComments(appId, mealId);
    const counter = modal.querySelector('#comment-count');
    counter.innerText = countComments(comments);

    const list = modal.querySelector('#comment-list');
    list.innerHTML = '';

    comments.forEach((involvement) => {
      const li = document.createElement('li');
      li.innerHTML = `${involvement.creation_date} ${involvement.username}: ${involvement.comment}`;
      list.appendChild(li);
    });
  };

  const form = document.querySelector('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
      item_id: mealId,
      username: form.elements.username.value,
      comment: form.elements.comment.value,
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