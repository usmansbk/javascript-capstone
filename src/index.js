import app from './js/app.js';
import './style.css';
import Logo from './img/logo.png';

const view = `
<header class="app-bar bg-primary-dark text-white">
  <nav class="navbar">
    <a href="./"><img src=${Logo} alt="" class="logo" /></a>
    <ul class="nav">
      <li><a href="#meals">Meals (<span id="meal-counter">0</span>)</a></li>
      <li><a href="#categories">Categories</a></li>
      <li><a href="#areas">Areas</a></li>
    </ul>
  </nav>
</header>
<main class="app-body bg-primary text-white">
</main>
<footer class="app-footer bg-primary-dark text-white">
  Created by Microverse under CC license
</footer>
`;

const root = document.getElementById('root');
root.innerHTML = view;

window.addEventListener('load', () => app());