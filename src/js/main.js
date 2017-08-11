import searchUser from './search-user';
import getRepositories from './repositories';
import renderUser from './User';
import renderRepos from './Repos';
import renderFollow from './Follow';
import renderDetails from './Details';

const $profile = document.querySelector('#profile');
const $follow = document.querySelector('#follow');
const $details = document.querySelector('#details');
const $repositories = document.querySelector('#repositories');
const $repositoriesTitle = document.querySelector('#repositories-title');
const $searchForm = document.querySelector('#search-form');
const $userSearch = document.querySelector('#user-search');

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
