import searchUser from './search-user';
import getRepositories from './repositories';
import connection from './plugins/connection';

// components
import Start from './components/Start';
import Repos from './components/Repos';
import Notes from './components/Notes';

// assets
import '../styl/app.styl';
import '../img/icons/search.svg';

const db = connection.database();

const $ = document.querySelector.bind(document);

// dom elements
const $app = $('#app');

const $repositories = $('#repositories');
const $repositoriesTitle = $('#repositories-title');
const $searchForm = $('#search-form');
const $userSearch = $('#user-search');
const $noteForm = $('#note-form');
const $noteText = $('#note-text');
const $noteList = $('#note-list');
const $tabs = $('.tabs');
const $tabItems = document.querySelectorAll('li[role="tab"]');
const $tabPanels = document.querySelectorAll('div[role="tabpanel"]');

let username;

$searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  username = $userSearch.value;

  $userSearch.blur();

  searchUser(username)
    .then((data) => {
      const start = new Start($app, data);
      start.init();

      db.ref('github-notes').on('value', (res) => {
        const obj = Object.entries(res.val());
        const notes = new Notes($noteList, obj, data);
        notes.render();
      });
    });
});

$noteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.ref('github-notes').push({ username, note: $noteText.value });
  $noteText.value = '';
});

$noteList.addEventListener('click', (e) => {
  e.preventDefault();

  const id = e.target.getAttribute('id');

  if (id) {
    db.ref(`github-notes/${id}`).remove();
  }
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

// select tabs
$tabs.addEventListener('click', (e) => {
  const tabsTotal = $tabItems.length;

  // deselect all the tabs
  for (let i = 0; i < tabsTotal; i += 1) {
    $tabItems[i].setAttribute('aria-selected', 'false');
  }

  // select this tab
  e.target.setAttribute('aria-selected', 'true');

  // find out what tab panel this tab controls
  const panId = e.target.getAttribute('aria-controls');

  const tabPan = $(`#${panId}`);

  // hide all the panels
  for (let i = 0; i < $tabPanels.length; i += 1) {
    $tabPanels[i].setAttribute('aria-hidden', 'true');
  }

  // show our panel
  tabPan.setAttribute('aria-hidden', 'false');
});

// fetch repositories
function checkRepos() {
  if (username && !$repositories.innerHTML) {
    getRepositories(username)
      .then((data) => {
        const repos = new Repos($repositories, data);
        repos.render();
      });

    $repositoriesTitle.removeEventListener('click', checkRepos);
  }
}

$repositoriesTitle.addEventListener('click', checkRepos);
