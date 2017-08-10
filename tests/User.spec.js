import 'jsdom-global/register';
import { expect } from 'chai';
import renderUser from '../src/js/User';

describe('User', () => {

  it('should exist', () => {
    expect(renderUser).to.exist;
  });

  const data = {
    "login": "felipecesr",
    "id": 10980841,
    "avatar_url": "https://avatars0.githubusercontent.com/u/10980841?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/felipecesr",
    "html_url": "https://github.com/felipecesr",
    "followers_url": "https://api.github.com/users/felipecesr/followers",
    "following_url": "https://api.github.com/users/felipecesr/following{/other_user}",
    "gists_url": "https://api.github.com/users/felipecesr/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/felipecesr/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/felipecesr/subscriptions",
    "organizations_url": "https://api.github.com/users/felipecesr/orgs",
    "repos_url": "https://api.github.com/users/felipecesr/repos",
    "events_url": "https://api.github.com/users/felipecesr/events{/privacy}",
    "received_events_url": "https://api.github.com/users/felipecesr/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Felipe César",
    "company": null,
    "blog": "http://felipecesar.com.br",
    "location": "Ceará, Brasil",
    "email": null,
    "hireable": null,
    "bio": "Front End Developer",
    "public_repos": 27,
    "public_gists": 1,
    "followers": 3,
    "following": 13,
    "created_at": "2015-02-12T18:04:29Z",
    "updated_at": "2017-08-05T22:41:14Z"
  };

  const markup = `
    <img class="profile__photo" src="http://via.placeholder.com/120x120" alt="Person">
    <p class="profile__name">Name</p>
    <p class="profile__username">@username</p>
  `;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderUser(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

});
