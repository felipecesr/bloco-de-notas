import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import getRepositories from '../src/js/repositories';

describe('Repositories', () => {

  describe('smoke tests', () => {

    it('sould have getRepositories method', () => {
      expect(getRepositories).to.exist;
    });

  });

  describe('getRepositories', () => {

    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => fetchedStub.restore());

    it('should call fetch function', () => {
      const repositories = getRepositories();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      const repositories = getRepositories('felipecesr');

      expect(fetchedStub).to.have.been.calledWith('https://api.github.com/users/felipecesr/repos');
    });

    it('shoud the JSON data from the Promise', () => {
      promise.resolves({ body: 'json' });
      const repositories = getRepositories('felipecesr');

      expect(repositories.resolveValue).to.be.eql({ body: 'json' });
    });

  });

});
