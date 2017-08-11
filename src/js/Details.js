function renderDetails(data, element) {
  const markup = `
    <li class="details__item">
      <svg class="details__icon"><use xlink:href="/img/icons.svg#group"></use></svg>
      <a href="#" class="details__desc">${data.company}</a>
    </li>
    <li class="details__item">
      <svg class="details__icon"><use xlink:href="/img/icons.svg#place"></use></svg>
      <a href="#" class="details__desc">${data.location}</a>
    </li>
    <li class="details__item">
      <svg class="details__icon"><use xlink:href="/img/icons.svg#envelope"></use></svg>
      <a href="mailto:${data.email}" class="details__desc">${data.email}</a>
    </li>
    <li class="details__item">
      <svg class="details__icon"><use xlink:href="/img/icons.svg#home"></use></svg>
      <a href="${data.blog}" class="details__desc">${data.blog}</a>
    </li>
  `;

  element.innerHTML = markup;
}

export default renderDetails;
