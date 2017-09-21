import 'jsdom-global/register';
import { expect } from 'chai';
import minify from '../src/js/helpers/minify';
import details from '../src/js/components/details';

describe('Details', () => {

  describe('render tests', () => {
    const data = {
      "company": "Company",
      "blog": "http://felipecesar.com.br",
      "location": "Ceará, Brasil",
      "email": "felipecesr@gmail.com",
    };

    const markup = minify(`
      <div class="container">
        <ul class="details" id="details">
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
        </ul>
      </div>
    `);

    const data2 = {
      "company": null,
      "blog": "http://felipecesar.com.br",
      "location": "Ceará, Brasil",
      "email": null,
    };

    const markup2 = minify(`
      <div class="container">
        <ul class="details" id="details">
          <li class="details__item">
            <svg class="details__icon"><use xlink:href="icons.svg#place"></use></svg>
            <a href="#" class="details__desc">Ceará, Brasil</a>
          </li>
          <li class="details__item">
            <svg class="details__icon"><use xlink:href="icons.svg#home"></use></svg>
            <a href="http://felipecesar.com.br" class="details__desc">http://felipecesar.com.br</a>
          </li>
        </ul>
      </div>
    `);

    it('should create and return the markup given a correct data', () => {
      let el = details(data);

      el = minify(el);

      expect(el).to.be.eql(markup);
    });

    it('should create and return the markup given an incomplete data', () => {
      let el = details(data2);

      el = minify(el);

      expect(el).to.be.eql(markup2);
    });
  });
});
