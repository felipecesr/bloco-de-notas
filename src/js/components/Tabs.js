import Component from './Component';

class Tabs extends Component {
  render() {
    const markup = `
      <li class="tabs__item" id="tab-notes" aria-controls="panel-notes" aria-selected="true" role="tab">Notes</li><!--
      --><li class="tabs__item" id="repositories-title" aria-controls="panel-repos" aria-selected="false" role="tab">Repositories</li>
    `;

    this.element.innerHTML = markup;
  }
}

export default Tabs;
