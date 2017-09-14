import 'jsdom-global/register';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import minify from '../src/js/helpers/minify';
import Panels from '../src/js/components/Panels';
chai.use(sinonChai);

describe('Panels', () => {
  describe('smoke tests', () => {
    let panels;

    beforeEach(() => panels = new Panels());

    it('should exist render method', () => {
      expect(panels.render).to.exist;
    });
  });

  describe('render methods', () => {
    const markup = minify(`
      <div id="panel-notes" class="panel" aria-labelledby="tab-notes" aria-hidden="false" role="tabpanel">
        <div class="notes">
          <div class="container">
            <form class="submit" id="note-form">
              <textarea class="submit__input" id="note-text" placeholder="Write a new note..."></textarea>
              <div class="submit__buttons">
                <button class="button button--success" type="submit">Submit</button>
              </div>
            </form>
            <ul id="note-list"></ul>
          </div>
        </div>
      </div>
      <div id="panel-repos" class="panel" aria-labelledby="repositories-title" aria-hidden="true" role="tabpanel">
        <div class="container">
          <ul class="repositories" id="repositories"></ul>
        </div>
      </div>
    `);

    it('should create and append the markup', () => {
      const element = document.createElement('ul');
      const panels = new Panels(element);
      panels.render();

      expect(minify(element.innerHTML)).to.be.eql(markup);
    });
  });
});
