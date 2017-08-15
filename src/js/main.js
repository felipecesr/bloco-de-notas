import searchUser from './search-user';
import getRepositories from './repositories';
import db from './plugins/database';
import renderUser from './components/User';
import renderRepos from './components/Repos';
import renderFollow from './components/Follow';
import renderDetails from './components/Details';
import Notes from './components/Notes';

import '../styl/app.styl';

window.db = db;

const $ = document.querySelector.bind(document);

const $profile = $('#profile');
const $follow = $('#follow');
const $details = $('#details');
const $repositories = $('#repositories');
const $repositoriesTitle = $('#repositories-title');
const $searchForm = $('#search-form');
const $userSearch = $('#user-search');
const $noteForm = $('#note-form');
const $noteText = $('#note-text');
const $noteList = $('#note-list');

$searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  searchUser($userSearch.value)
    .then((data) => {
      renderUser(data, $profile);
      renderFollow(data, $follow);
      renderDetails(data, $details);

      db.ref('github-notes').on('value', (res) => {
        const obj = Object.entries(res.val());
        const notes = new Notes(obj, $noteList, data);
        notes.render();
      });
    });

  getRepositories($userSearch.value)
    .then((data) => {
      $repositoriesTitle.textContent = `Repositories (${data.length})`;
      renderRepos(data, $repositories);
    });
});

$noteForm.addEventListener('submit', (e) => {
  const username = document.getElementById('username') || '';
  e.preventDefault();
  db.ref('github-notes').push({ username: username.textContent, note: $noteText.value });
  $noteText.value = '';
});

$noteList.addEventListener('click', (e) => {
  e.preventDefault();

  const id = e.target.getAttribute('id');

  if (id) {
    db.ref(`github-notes/${id}`).remove();
  }
});
