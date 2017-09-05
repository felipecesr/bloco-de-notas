// components
import Component from './Component';
import User from './User';
import Follow from './Follow';
import Details from './Details';

class Start extends Component {
  render() {
    const markup = `
      <div class="profile" id="profile"></div>
      <ul class="follow" id="follow"></ul>
      <div class="container">
        <ul class="details" id="details"></ul>
      </div>
    `;

    this.element.innerHTML = markup;
  }

  init() {
    this.render();

    const $user = this.element.querySelector('#profile');
    const $follow = this.element.querySelector('#follow');
    const $details = this.element.querySelector('#details');

    const user = new User($user, this.data);
    user.render();

    const follow = new Follow($follow, this.data);
    follow.render();

    const details = new Details($details, this.data);
    details.render();
  }
}

export default Start;
