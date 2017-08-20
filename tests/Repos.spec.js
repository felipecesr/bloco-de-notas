import 'jsdom-global/register';
import { expect } from 'chai';
import minify from '../src/js/helpers/minify';
import Repos from '../src/js/components/Repos';

describe('Repos', () => {

  describe('smoke tests', () => {
    it('should exist', () => {
      const repos = new Repos();
      expect(repos.render).to.exist;
    });
  });

  describe('render tests', () => {
    const data = [
      {
        "name": "Advanced-Gulp-WordPress",
        "description": "An Advanced Gulp Workflow for WordPress themes."
      },
      {
        "name": "bloco-de-notas",
        "description": null
      }
    ];

    const markup = minify(`
      <li class="repository">
        <p class="repository__title">Advanced-Gulp-WordPress</p>
        <p class="repository__desc">An Advanced Gulp Workflow for WordPress themes.</p>
      </li>
      <li class="repository">
        <p class="repository__title">bloco-de-notas</p>
        <p class="repository__desc"></p>
      </li>
    `);

    it('should create and append the markup given a correct data', () => {
      const element = document.createElement('div');
      const repos = new Repos(element, data);
      repos.render();

      expect(minify(element.innerHTML)).to.be.eql(markup);
    });
  });

});
