import 'jsdom-global/register';
import { expect } from 'chai';
import Notes from '../src/js/Notes';

describe('Notes', () => {

  describe('smoke tests', () => {
    const notes = new Notes();

    it('should exist render method', () => {
      expect(notes.render).to.exist;
    });
  });

  describe('render methods', () => {

    const data = {
      "login": "felipecesr",
      "id": 10980841
    };

    it('should receive the correct data to filter by id', () => {
      const notes = new Notes(data);

      expect(notes.userId).to.be.eql(10980841);
    });

    // const minify = str => str.replace(/>\s+|\s+</g, m => m.trim());

    // const markup = minify(`
    //   <li class="note">Primeiro <a href="#" class="remove-note">Remove</a></li>
    //   <li class="note">Segundo <a href="#" class="remove-note">Remove</a></li>
    // `);

    // it('should create and append the markup given a correct data', () => {
    //   const element = document.createElement('div');
    //   renderNotes(data, element);

    //   expect(minify(element.innerHTML)).to.be.eql(markup);
    // });
  });

});
