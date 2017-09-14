import Component from './Component';

class Panels extends Component {
  render() {
    const markup = `
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
    `;

    this.element.innerHTML = markup;
  }
}

export default Panels;
