import 'jsdom-global/register';
import { expect } from 'chai';
import Follow from '../src/js/components/Follow';

describe('Follow', () => {

  describe('smoke tests', () => {
    it('should exist', () => {
      const follow = new Follow();
      expect(follow.render).to.exist;
    });
  });

  describe('render tests', () => {
    const data = {
      "followers": 3,
      "following": 13
    };

    const markup = `
      <li class="follow__item">
        <span class="follow__item--value">3</span> Followers
      </li>
      <li class="follow__item">
        <span class="follow__item--value">13</span> Following
      </li>
    `;

    it('should create and append the markup given a correct data', () => {
      const element = document.createElement('div');
      const follow = new Follow(element, data);
      follow.render();

      expect(element.innerHTML).to.be.eql(markup);
    });
  });
});
