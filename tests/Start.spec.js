import 'jsdom-global/register';
import { expect } from 'chai';
import minify from '../src/js/helpers/minify';
import Start from '../src/js/Start';

describe('Init', () => {
  let start;

  beforeEach(() => start = new Start());

  describe('smoke tests', () => {
    it('should exist render method', () => {
      expect(start.render).to.exist;
    });

    it('should exist init method', () => {
      expect(start.init).to.exist;
    });
  });

  describe('render tests', () => {
    const data = {
      "login": "felipecesr",
      "avatar_url": "https://avatars0.githubusercontent.com/u/10980841?v=4",
      "name": "Felipe César",
      "company": null,
      "blog": "http://felipecesar.com.br",
      "location": "Ceará, Brasil",
      "email": null,
      "followers": 3,
      "following": 13
    };

    const markup = minify(`
      <div class="profile" id="profile"></div>
      <ul class="follow" id="follow"></ul>
      <div class="container">
        <ul class="details" id="details"></ul>
      </div>
    `);

    let start;
    let element;

    beforeEach(() => {
      element = document.createElement('div');
      start = new Start(element, data);
    });

    it('should append correct markup for user components', () => {
      const profileMarkup = minify(`
        <img class="profile__photo" src="https://avatars0.githubusercontent.com/u/10980841?v=4" alt="Felipe César">
        <p class="profile__name">Felipe César</p>
        <p class="profile__username" id="username">felipecesr</p>
      `);

      start.render();
      start.init();

      const profile = element.querySelector('#profile');

      expect(minify(profile.innerHTML)).to.be.eql(profileMarkup);
    });

    it('should append correct markup for follow components', () => {
      const followMarkup = minify(`
        <li class="follow__item">
          <span class="follow__item--value">3</span> Followers
        </li>
        <li class="follow__item">
          <span class="follow__item--value">13</span> Following
        </li>
      `);

      start.render();
      start.init();

      const follow = element.querySelector('#follow');

      expect(minify(follow.innerHTML)).to.be.eql(followMarkup);
    });

    it('should append correct markup for details components', () => {
      const detailsMarkup = minify(`
        <li class="details__item">
          <svg class="details__icon"><use xlink:href="icons.svg#place"></use></svg>
          <a href="#" class="details__desc">Ceará, Brasil</a>
        </li>
        <li class="details__item">
          <svg class="details__icon"><use xlink:href="icons.svg#home"></use></svg>
          <a href="http://felipecesar.com.br" class="details__desc">http://felipecesar.com.br</a>
        </li>
      `);

      start.render();
      start.init();

      const details = element.querySelector('#details');

      expect(minify(details.innerHTML)).to.be.eql(detailsMarkup);
    });
  });
});
