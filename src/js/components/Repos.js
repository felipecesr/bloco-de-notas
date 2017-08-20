import Component from './Component';

class Repos extends Component {
  render() {
    const markup = this.data.map(repo => `
      <li class="repository">
        <p class="repository__title">${repo.name}</p>
        <p class="repository__desc">${repo.description || ''}</p>
      </li>
    `).join('');

    this.element.innerHTML = markup;
  }
}

export default Repos;
