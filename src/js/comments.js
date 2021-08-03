import * as API from './api.js';

const displayCommentsPopup = async ({ mealId, appId }) => {
  const meal = await API.getMealById(mealId);
  const comment = [{date: '10/01/2021', userName: 'Tom', text: "Wow, super delicious"}, {date: '19/01/2021', userName: 'Jack', text: "Super delicious"}] || await API.getComments(appId, mealId);
  console.log(comment);
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

    <div>
      <h2>Comments (<span id="comment-count">0</span>)</h2>
      <ul id='comment-list'>
        
      </ul>
    </div>
    `;
  const commentList = details.querySelector('#comment-list');
  const showComments = (commentArray) => commentArray.map((comments) => `<li>${comments.date} ${comments.userName} ${comments.text}</li>`).join('');
  // const showComments = (commentArray) => commentArray.map((comments) => `<li>${comments.date} ${comments.userName} ${comments.text}</li>`).join('');
  // commentList.innerHTML = showComments(comment);
  commentList.innerHTML = showComments([{date: '10/01/2021', userName: 'Tom', text: "Wow, super delicious"}, {date: '19/01/2021', userName: 'Jack', text: "Super delicious"}]);
  modal.append(details);
  
  
};

export default displayCommentsPopup;