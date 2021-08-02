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
                </div>
                <div class="card-buttons">
                    <button class="primary-button">Comments</button>
                    <button class="primary-button">Reservations</button>
                </div>
            </div>
        `;

    grid.appendChild(card);
  });

  main.appendChild(grid);
};

export default displayItems;