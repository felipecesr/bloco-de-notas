import 'jsdom-global/register';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import minify from '../src/js/helpers/minify';
import Search from '../src/js/components/Search';
chai.use(sinonChai);

describe.skip('Search', () => {
  describe('smoke tests', () => {
    let search;

    beforeEach(() => search = new Search());

    it('should exist submit method', () => {
      expect(search.submitForm).to.exist;
    });
  });

  describe('render methods', () => {
    it('should call submit method when submit event on fire', () => {
      const element = document.createElement('form');

      const search = new Search(element);
      search.render();

      const spy = sinon.spy(search, 'submitForm');

      element.submit();

      expect(search.submitForm).to.have.been.called();
    });
  });
});
