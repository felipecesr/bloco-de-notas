// import '../../img/icons/group.svg';
// import '../../img/icons/place.svg';
// import '../../img/icons/envelope.svg';
// import '../../img/icons/home.svg';

const details = (data) => {
  let markup = '<div class="container"><ul class="details" id="details">';

  if (data.company) {
    markup += `
      <li class="details__item">
        <svg class="details__icon"><use xlink:href="icons.svg#group"></use></svg>
        <a href="#" class="details__desc">${data.company}</a>
      </li>
    `;
  }

  if (data.location) {
    markup += `
      <li class="details__item">
        <svg class="details__icon"><use xlink:href="icons.svg#place"></use></svg>
        <a href="#" class="details__desc">${data.location}</a>
      </li>
    `;
  }

  if (data.email) {
    markup += `
      <li class="details__item">
        <svg class="details__icon"><use xlink:href="icons.svg#envelope"></use></svg>
        <a href="mailto:${data.email}" class="details__desc">${data.email}</a>
      </li>
    `;
  }

  if (data.blog) {
    markup += `
      <li class="details__item">
        <svg class="details__icon"><use xlink:href="icons.svg#home"></use></svg>
        <a href="${data.blog}" class="details__desc">${data.blog}</a>
      </li>
    `;
  }

  markup += '</ul></div>';

  return markup;
};

export default details;
