import 'jsdom-global/register';
import { expect } from 'chai';
import renderDetails from '../src/js/Details';

describe('Details', () => {

  it('should exist', () => {
    expect(renderDetails).to.exist;
  });

  const data = {
    "company": "Company",
    "blog": "http://felipecesar.com.br",
    "location": "Ceará, Brasil",
    "email": "felipecesr@gmail.com",
  };

  const markup = `
    <li class="details__item">
      <svg class="details__icon"><use xlink:href="/img/icons.svg#group"></use></svg>
      <a href="#" class="details__desc">Company</a>
    </li>
    <li class="details__item">
      <svg class="details__icon"><use xlink:href="/img/icons.svg#place"></use></svg>
      <a href="#" class="details__desc">Ceará, Brasil</a>
    </li>
    <li class="details__item">
      <svg class="details__icon"><use xlink:href="/img/icons.svg#envelope"></use></svg>
      <a href="mailto:felipecesr@gmail.com" class="details__desc">felipecesr@gmail.com</a>
    </li>
    <li class="details__item">
      <svg class="details__icon"><use xlink:href="/img/icons.svg#home"></use></svg>
      <a href="http://felipecesar.com.br" class="details__desc">http://felipecesar.com.br</a>
    </li>
  `;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderDetails(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

});
