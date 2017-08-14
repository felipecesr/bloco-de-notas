import searchUser from './search-user';
import getRepositories from './repositories';
import db from './plugins/database';
import renderUser from './User';
import renderRepos from './Repos';
import renderFollow from './Follow';
import renderDetails from './Details';
import Notes from './Notes';

import '../styl/app.styl';

window.db = db;

const $profile = document.querySelector('#profile');
const $follow = document.querySelector('#follow');
const $details = document.querySelector('#details');
const $repositories = document.querySelector('#repositories');
const $repositoriesTitle = document.querySelector('#repositories-title');
const $searchForm = document.querySelector('#search-form');
const $userSearch = document.querySelector('#user-search');
const $noteForm = document.querySelector('#note-form');
const $noteText = document.querySelector('#note-text');
const $noteList = document.querySelector('#note-list');

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
