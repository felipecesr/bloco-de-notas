import Component from './Component';

class Notes extends Component {
  constructor(element, data, user) {
    super(element, data);
    this.user = user;
  }

  render() {
    const markup = this.data.filter(n => n[1].username === this.user.login).map(n => `
      <li class="note">${n[1].note} <a href="#" class="note__remove" id="${n[0]}">Remove</a></li>
    `).join('');

    this.element.innerHTML = markup;
  }
}

export default Notes;
