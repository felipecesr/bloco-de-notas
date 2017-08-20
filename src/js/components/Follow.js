import Component from './Component';

class Follow extends Component {
  render() {
    const markup = `
      <li class="follow__item">
        <span class="follow__item--value">${this.data.followers}</span> Followers
      </li>
      <li class="follow__item">
        <span class="follow__item--value">${this.data.following}</span> Following
      </li>
    `;
    this.element.innerHTML = markup;
  }
}
export default Follow;
