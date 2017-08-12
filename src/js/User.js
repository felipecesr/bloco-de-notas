function renderUser(data, element) {
  const el = element;
  const markup = `
    <img class="profile__photo" src="${data.avatar_url}" alt="${data.name}">
    <p class="profile__name">${data.name}</p>
    <p class="profile__username" id="username">${data.login}</p>
  `;

  el.innerHTML = markup;
}

export default renderUser;
