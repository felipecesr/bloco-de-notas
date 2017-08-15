function renderFollow(data, element) {
  const el = element;
  const markup = `
    <li class="follow__item">
      <span class="follow__item--value">${data.followers}</span> Followers
    </li>
    <li class="follow__item">
      <span class="follow__item--value">${data.following}</span> Following
    </li>
  `;
  el.innerHTML = markup;
}
export default renderFollow;
