import 'jsdom-global/register';
import { expect } from 'chai';
import minify from '../src/js/helpers/minify';
import follow from '../src/js/components/follow';

describe('Follow', () => {

  describe('render tests', () => {
    const data = {
      "followers": 3,
      "following": 13
    };

    const markup = minify(`
      <ul class="follow" id="follow">
        <li class="follow__item">
          <span class="follow__item--value">3</span> Followers
        </li>
        <li class="follow__item">
          <span class="follow__item--value">13</span> Following
        </li>
      </ul>
    `);

    it('should create and return the markup given a correct data', () => {
      let el = follow(data);

      el = minify(el);

      expect(el).to.be.eql(markup);
    });
  });
});
