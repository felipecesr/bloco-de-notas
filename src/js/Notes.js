class Notes {
  constructor(data, user, element) {
    this.data = data;
    this.user = user;
    this.element = element;
  }

  render() {
    const markup = this.data.filter(n => n[1].username === this.user.login).map(n => `
      <li class="note">${n[1].note} <a href="#" class="note__remove" id="${n[0]}">Remove</a></li>
    `).join('');

    this.element.innerHTML = markup;
  }
}

export default Notes;
