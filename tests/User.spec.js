import 'jsdom-global/register';
import { expect } from 'chai';
import renderUser from '../src/js/User';

describe('User', () => {

  it('should exist', () => {
    expect(renderUser).to.exist;
  });

  const data = {
    "login": "felipecesr",
    "avatar_url": "https://avatars0.githubusercontent.com/u/10980841?v=4",
    "name": "Felipe César"
  };

  const markup = `
    <img class="profile__photo" src="${data.avatar_url}" alt="${data.name}">
    <p class="profile__name">${data.name}</p>
    <p class="profile__username" id="username">${data.login}</p>
  `;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderUser(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

});
