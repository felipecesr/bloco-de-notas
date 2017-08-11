import 'jsdom-global/register';
import { expect } from 'chai';
import renderRepos from '../src/js/Repos';

describe.skip('Repos', () => {

  it('should exist', () => {
    expect(renderRepos).to.exist;
  });

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

  const markup = `
    <li class="repository">
      <p class="repository__title">Advanced-Gulp-WordPress</p>
      <p class="repository__desc">An Advanced Gulp Workflow for WordPress themes.</p>
    </li>
    <li class="repository">
      <p class="repository__title">bloco-de-notas</p>
      <p class="repository__desc"></p>
    </li>
  `;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderRepos(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

});
