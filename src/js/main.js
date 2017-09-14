import searchUser from './search-user';
import connection from './plugins/connection';

// components
import Start from './components/Start';

// assets
import '../styl/app.styl';
import '../img/icons/search.svg';

window.db = connection.database();

const $ = document.querySelector.bind(document);

// dom elements
const $app = $('#app');
const $searchForm = $('#search-form');
const $userSearch = $('#user-search');

let username;

$searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  username = $userSearch.value;

  $userSearch.blur();

  searchUser(username)
    .then((data) => {
      const start = new Start($app, data);
      start.init(username);
    });
});

window.onscroll = () => {
  if (window.pageYOffset === 0) {
    $searchForm.className = 'search';
  } else {
    $searchForm.className = 'search search--shadow';
  }
};

$userSearch.addEventListener('focus', () => {
  document.documentElement.classList.add('search--active');
});

$userSearch.addEventListener('blur', () => {
  document.documentElement.classList.remove('search--active');
});
