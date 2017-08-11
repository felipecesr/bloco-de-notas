import searchUser from './search-user';
import getRepositories from './repositories';
import db from './plugins/database';
import renderUser from './User';
import renderRepos from './Repos';
import renderFollow from './Follow';
import renderDetails from './Details';

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
const $notesCount = document.querySelector('#notes-count');

$searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  searchUser($userSearch.value)
    .then((data) => {
      renderUser(data, $profile);
      renderFollow(data, $follow);
      renderDetails(data, $details);
    });

  getRepositories($userSearch.value)
    .then((data) => {
      $repositoriesTitle.textContent = `Repositories (${data.length})`;
      renderRepos(data, $repositories);
    });
});

$noteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.ref('github-notes').push($noteText.value);
  $noteText.value = '';
});

db.ref('github-notes').on('value', (data) => {
  const obj = Object.entries(data.val());
  const list = obj.map(n => `<li class="note">${n[1]} <a href="#" id="${n[0]}" class="remove-note">Remove</a></li>`).join('');
  $notesCount.innerText = `(${obj.length})`;
  $noteList.innerHTML = list;
});

$noteList.addEventListener('click', (e) => {
  const id = e.target.getAttribute('id');

  if (id) {
    db.ref(`github-notes/${id}`).remove();
  }
});
