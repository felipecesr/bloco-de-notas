import Component from './Component';

import '../../img/icons/group.svg';
import '../../img/icons/place.svg';
import '../../img/icons/envelope.svg';
import '../../img/icons/home.svg';

class Details extends Component {
  render() {
    let markup = '';

    if (this.data.company) {
      markup += `
        <li class="details__item">
          <svg class="details__icon"><use xlink:href="icons.svg#group"></use></svg>
          <a href="#" class="details__desc">${this.data.company}</a>
        </li>
      `;
    }

    if (this.data.location) {
      markup += `
        <li class="details__item">
          <svg class="details__icon"><use xlink:href="icons.svg#place"></use></svg>
          <a href="#" class="details__desc">${this.data.location}</a>
        </li>
      `;
    }

    if (this.data.email) {
      markup += `
        <li class="details__item">
          <svg class="details__icon"><use xlink:href="icons.svg#envelope"></use></svg>
          <a href="mailto:${this.data.email}" class="details__desc">${this.data.email}</a>
        </li>
      `;
    }

    if (this.data.blog) {
      markup += `
        <li class="details__item">
          <svg class="details__icon"><use xlink:href="icons.svg#home"></use></svg>
          <a href="${this.data.blog}" class="details__desc">${this.data.blog}</a>
        </li>
      `;
    }

    this.element.innerHTML = markup;
  }
}

export default Details;
