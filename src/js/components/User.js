import Component from './Component';

class User extends Component {
  render() {
    const markup = `
      <img class="profile__photo" src="${this.data.avatar_url}" alt="${this.data.name}">
      <p class="profile__name">${this.data.name}</p>
      <p class="profile__username" id="username">${this.data.login}</p>
    `;

    this.element.innerHTML = markup;
  }
}

export default User;
