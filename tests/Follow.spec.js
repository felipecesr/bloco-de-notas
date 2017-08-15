import 'jsdom-global/register';
import { expect } from 'chai';
import renderFollow from '../src/js/components/Follow';

describe('Follow', () => {

  it('should exist', () => {
    expect(renderFollow).to.exist;
  });

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
    renderFollow(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

});
