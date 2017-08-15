import 'jsdom-global/register';
import { expect } from 'chai';
import Notes from '../src/js/components/Notes';

describe('Notes', () => {

  describe('smoke tests', () => {
    const notes = new Notes();

    it('should exist render method', () => {
      expect(notes.render).to.exist;
    });

  });

  describe('render methods', () => {

    const data = [
      [
        '-KrIgDgrqbfiFVcDLm0a',
        {note: 'Primeiro', username: 'felipecesr'}
      ],
      [
        '-KrIi1zTt-_K6qQkWpwO',
        {note: 'Segundo', username: 'felipecesr'}
      ],
      [
        '-KrIi1zTt-_K6qQkWpwO',
        {note: 'Terceiro', username: 'ManoelSilva'}
      ]
    ];

    const user = {
      "login": "felipecesr"
    };

    const minify = str => str.replace(/>\s+|\s+</g, m => m.trim());

    const markup = minify(`
      <li class="note">Primeiro <a href="#" class="note__remove" id="-KrIgDgrqbfiFVcDLm0a">Remove</a></li>
      <li class="note">Segundo <a href="#" class="note__remove" id="-KrIi1zTt-_K6qQkWpwO">Remove</a></li>
    `);

    it('should create and append the markup given a filtered data', () => {
      const element = document.createElement('div');

      const notes = new Notes(data, element, user);
      notes.render();

      expect(minify(element.innerHTML)).to.be.eql(markup);
    });
  });

});
