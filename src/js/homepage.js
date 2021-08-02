export const countItems = (items) => items.length;

const displayItems = ({ meals = [], likeMeal, onPressCommentsButton }) => {
  const main = document.querySelector('main');
  const mealsCounter = document.getElementById('meal-counter');
  mealsCounter.innerText = countItems(meals);

  const grid = document.createElement('div');
  grid.classList.add('grid');

  meals.forEach(({
    id, name, src, likes = 0,
  }) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
            <img src=${src} alt="" class="card-image" />
            <div class="card-body">
                <div class="card-header">
                    <h4>${name}</h4>
                    <div class="like-button">
                        <button data-id="like-meal">
                            <span class="material-icons">favorite_border</span>
                        </button>
                        <p><span data-id="likes">${likes}</span> Likes</p>
                    </div>
                </div>
                <div class="card-buttons">
                    <button data-id="comments" class="primary-button">Comments</button>
                    <button data-id="reservations" class="primary-button">Reservations</button>
                </div>
            </div>
        `;

    const commentsButton = card.querySelector('[data-id="comments"]');
    const likeButton = card.querySelector('[data-id="like-meal"]');
    const counter = card.querySelector('[data-id="likes"]');

    commentsButton.addEventListener('click', () => {
      onPressCommentsButton(id);
    });

    likeButton.addEventListener('click', async () => {
      const isLiked = await likeMeal(id);

      if (isLiked) {
        counter.innerText = Number.parseInt(counter.innerText, 10) + 1;
      }
    });

    grid.appendChild(card);
  });

  main.appendChild(grid);
};

export default displayItems;