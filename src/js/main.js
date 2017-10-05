import searchUser from './search-user';

// assets
import '../styl/app.styl';
import '../img/icons/search.svg';

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
      import(/* webpackChunkName: 'Start' */ './components/Start').then((module) => {
        const Start = module.default;
        const start = new Start($app, data);
        start.init(username);
      });
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
  document.documentElement.classList.add('shadow--active');
});

$userSearch.addEventListener('blur', () => {
  document.documentElement.classList.remove('shadow--active');
});
