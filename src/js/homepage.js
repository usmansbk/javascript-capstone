const displayItems = ({ meals = [] }) => {
  const main = document.querySelector('main');

  const grid = document.createElement('div');
  grid.classList.add('grid');

  meals.forEach(({ id, name, src }) => {
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
                        <p><span data-id="likes">0</span> Likes</p>
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

    commentsButton.addEventListener('click', () => {
      console.log(id);
    });

    likeButton.addEventListener('click', () => {
      console.log('Like', id);
    });

    grid.appendChild(card);
  });

  main.appendChild(grid);
};

export default displayItems;