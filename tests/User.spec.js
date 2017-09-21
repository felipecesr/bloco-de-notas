import 'jsdom-global/register';
import { expect } from 'chai';
import minify from '../src/js/helpers/minify';
import user from '../src/js/components/user';

describe('User', () => {

  describe('render tests', () => {
    const data = {
      "login": "felipecesr",
      "avatar_url": "https://avatars0.githubusercontent.com/u/10980841?v=4",
      "name": "Felipe César"
    };

    const markup = minify(`
      <div class="profile" id="profile">
        <img class="profile__photo" src="https://avatars0.githubusercontent.com/u/10980841?v=4" alt="Felipe César">
        <p class="profile__name">Felipe César</p>
        <p class="profile__username" id="username">felipecesr</p>
      </div>
    `);

    it('should create and return the markup given a correct data', () => {
      let el = user(data);

      el = minify(el);

      expect(el).to.be.eql(markup);
    });
  });
});
