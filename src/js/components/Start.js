import getRepositories from '../repositories';
import connection from '../plugins/connection';

// components
import Component from './Component';
import user from './user';
import follow from './follow';
import details from './details';
import Notes from './Notes';
// import Repos from './Repos';

const db = connection.database();

class Start extends Component {
  render() {
    const markup = `
      ${user(this.data)}
      ${follow(this.data)}
      ${details(this.data)}
      <ul class="tabs" id="tabs" role="tablist">
        <li class="tabs__item" id="tab-notes" aria-controls="panel-notes" aria-selected="true" role="tab">Notes</li><!--
        --><li class="tabs__item" id="repositories-title" aria-controls="panel-repos" aria-selected="false" role="tab">Repositories</li>
      </ul>
      <span id="panels">
        <div id="panel-notes" class="panel" aria-labelledby="tab-notes" aria-hidden="false" role="tabpanel">
          <div class="notes">
            <div class="container">
              <form class="submit" id="note-form">
                <textarea class="submit__input" id="note-text" placeholder="Write a new note..."></textarea>
                <div class="submit__buttons">
                  <button class="button button--success" type="submit">Submit</button>
                </div>
              </form>
              <ul id="note-list"></ul>
            </div>
          </div>
        </div>
        <div id="panel-repos" class="panel" aria-labelledby="repositories-title" aria-hidden="true" role="tabpanel">
          <div class="container">
            <ul class="repositories" id="repositories"></ul>
          </div>
        </div>
      </span>
    `;

    this.element.innerHTML = markup;
  }

  init(username) {
    this.render();

    const $tabs = this.element.querySelector('#tabs');
    const $panels = this.element.querySelector('#panels');

    // add listeners

    // notes
    const $noteForm = $panels.querySelector('#note-form');
    const $noteText = $panels.querySelector('#note-text');
    const $noteList = $panels.querySelector('#note-list');

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

    // select tabs
    const $tabItems = $tabs.querySelectorAll('li[role="tab"]');
    const $repositoriesTitle = $tabs.querySelector('#repositories-title');

    // panels
    const $repositories = $panels.querySelector('#repositories');
    const $tabPanels = $panels.querySelectorAll('div[role="tabpanel"]');

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

      const tabPan = $panels.querySelector(`#${panId}`);

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
            import(/* webpackChunkName: 'Repos' */ './Repos').then((module) => {
              const Repos = module.default;
              const repos = new Repos($repositories, data);
              repos.render();
            });
          });

        $repositoriesTitle.removeEventListener('click', checkRepos);
      }
    }

    $repositoriesTitle.addEventListener('click', checkRepos);

    db.ref('github-notes').on('value', (res) => {
      const obj = Object.entries(res.val());
      const notes = new Notes($noteList, obj, this.data);
      notes.render();
    });
  }
}

export default Start;
