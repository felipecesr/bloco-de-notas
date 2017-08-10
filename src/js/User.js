function renderUser(data, element) {
  const markup = `
    <img class="profile__photo" src="http://via.placeholder.com/120x120" alt="Person">
    <p class="profile__name">Name</p>
    <p class="profile__username">@username</p>
  `;

  element.innerHTML = markup;
}

export default renderUser;
