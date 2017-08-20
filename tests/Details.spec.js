import 'jsdom-global/register';
import { expect } from 'chai';
import minify from '../src/js/helpers/minify';
import Details from '../src/js/components/Details';

describe('Details', () => {

  describe('smoke tests', () => {
    it('should exist a render method', () => {
      const details = new Details();
      expect(details.render).to.exist;
    });
  });

  describe('render tests', () => {
    const data = {
      "company": "Company",
      "blog": "http://felipecesar.com.br",
      "location": "Ceará, Brasil",
      "email": "felipecesr@gmail.com",
    };

    const markup = minify(`
      <li class="details__item">
        <svg class="details__icon"><use xlink:href="icons.svg#group"></use></svg>
        <a href="#" class="details__desc">Company</a>
      </li>
      <li class="details__item">
        <svg class="details__icon"><use xlink:href="icons.svg#place"></use></svg>
        <a href="#" class="details__desc">Ceará, Brasil</a>
      </li>
      <li class="details__item">
        <svg class="details__icon"><use xlink:href="icons.svg#envelope"></use></svg>
        <a href="mailto:felipecesr@gmail.com" class="details__desc">felipecesr@gmail.com</a>
      </li>
      <li class="details__item">
        <svg class="details__icon"><use xlink:href="icons.svg#home"></use></svg>
        <a href="http://felipecesar.com.br" class="details__desc">http://felipecesar.com.br</a>
      </li>
    `);

    const data2 = {
      "company": null,
      "blog": "http://felipecesar.com.br",
      "location": "Ceará, Brasil",
      "email": null,
    };

    const markup2 = minify(`
      <li class="details__item">
        <svg class="details__icon"><use xlink:href="icons.svg#place"></use></svg>
        <a href="#" class="details__desc">Ceará, Brasil</a>
      </li>
      <li class="details__item">
        <svg class="details__icon"><use xlink:href="icons.svg#home"></use></svg>
        <a href="http://felipecesar.com.br" class="details__desc">http://felipecesar.com.br</a>
      </li>
    `);

    let element;

    beforeEach(() => element = document.createElement('div'));

    it('should create and append the markup given a correct data', () => {
      const details = new Details(element, data)
      details.render();

      expect(minify(element.innerHTML)).to.be.eql(markup);
    });

    it('should create and append the markup given an incomplete data', () => {
      const details = new Details(element, data2)
      details.render();

      expect(minify(element.innerHTML)).to.be.eql(markup2);
    });
  });
});
