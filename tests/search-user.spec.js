import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import searchUser from '../src/js/search-user';

describe('Github Wrapper', () => {

  describe('smoke tests', () => {

    it('sould exist the searchUser method', () => {
      expect(searchUser).to.exist;
    });

  });

  describe('generic search', () => {

    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => fetchedStub.restore());

    it('should call fetch function', () => {
      const user = searchUser();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const user = searchUser('felipecesr');

      expect(fetchedStub).to.have.been.calledWith('https://api.github.com/users/felipecesr');
    });

    it('shoud the JSON data from the Promise', () => {
      promise.resolves({ body: 'json' });
      const user = searchUser('felipecesr');

      expect(user.resolveValue).to.be.eql({ body: 'json' });
    });

  });

});
