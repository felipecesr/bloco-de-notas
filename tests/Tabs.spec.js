import 'jsdom-global/register';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import minify from '../src/js/helpers/minify';
import Tabs from '../src/js/components/Tabs';
chai.use(sinonChai);

describe('Tabs', () => {
  describe('smoke tests', () => {
    let tabs;

    beforeEach(() => tabs = new Tabs());

    it('should exist render method', () => {
      expect(tabs.render).to.exist;
    });
  });

  describe('render methods', () => {
    const markup = minify(`
      <li class="tabs__item" id="tab-notes" aria-controls="panel-notes" aria-selected="true" role="tab">Notes</li><!--
      --><li class="tabs__item" id="repositories-title" aria-controls="panel-repos" aria-selected="false" role="tab">Repositories</li>
    `);

    it('should create and append the markup', () => {
      const element = document.createElement('ul');
      const tabs = new Tabs(element);
      tabs.render();

      expect(minify(element.innerHTML)).to.be.eql(markup);
    });
  });
});
