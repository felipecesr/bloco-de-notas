import 'jsdom-global/register';
import { expect } from 'chai';
import User from '../src/js/components/User';

describe('User', () => {

  describe('smoke tests', () => {
    it('should exist a render method', () => {
      const user = new User();
      expect(user.render).to.exist;
    });
  });

  describe('render tests', () => {
    const data = {
      "login": "felipecesr",
      "avatar_url": "https://avatars0.githubusercontent.com/u/10980841?v=4",
      "name": "Felipe César"
    };

    const markup = `
      <img class="profile__photo" src="https://avatars0.githubusercontent.com/u/10980841?v=4" alt="Felipe César">
      <p class="profile__name">Felipe César</p>
      <p class="profile__username" id="username">felipecesr</p>
    `;

    it('should create and append the markup given a correct data', () => {
      const element = document.createElement('div');
      const user = new User(element, data);
      user.render();

      expect(element.innerHTML).to.be.eql(markup);
    });
  });
});
