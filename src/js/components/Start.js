import getRepositories from '../repositories';

// components
import Component from './Component';
import user from './user';
import follow from './follow';
import details from './details';
import Tabs from './Tabs';
import Panels from './Panels';
import Notes from './Notes';
import Repos from './Repos';

class Start extends Component {
  render() {
    const markup = `
      ${user(this.data)}
      ${follow(this.data)}
      ${details(this.data)}
      <ul class="tabs" id="tabs" role="tablist"></ul>
      <span id="panels"></panels>
    `;

    this.element.innerHTML = markup;
  }

  init(username) {
    this.render();

    const $tabs = this.element.querySelector('#tabs');
    const $panels = this.element.querySelector('#panels');

    const tabs = new Tabs($tabs, this.data);
    tabs.render();

    const panels = new Panels($panels, this.data);
    panels.render();

    // add listeners

    // notes
    const $noteForm = $panels.querySelector('#note-form');
    const $noteText = $panels.querySelector('#note-text');
    const $noteList = $panels.querySelector('#note-list');

    $noteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.db.ref('github-notes').push({ username, note: $noteText.value });
      $noteText.value = '';
    });

    $noteList.addEventListener('click', (e) => {
      e.preventDefault();

      const id = e.target.getAttribute('id');

      if (id) {
        window.db.ref(`github-notes/${id}`).remove();
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
            const repos = new Repos($repositories, data);
            repos.render();
          });

        $repositoriesTitle.removeEventListener('click', checkRepos);
      }
    }

    $repositoriesTitle.addEventListener('click', checkRepos);

    window.db.ref('github-notes').on('value', (res) => {
      const obj = Object.entries(res.val());
      const notes = new Notes($noteList, obj, this.data);
      notes.render();
    });
  }
}

export default Start;
