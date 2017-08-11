function renderUser(data, element) {
  const markup = `
    <img class="profile__photo" src="${data.avatar_url}" alt="${data.name}">
    <p class="profile__name">${data.name}</p>
    <p class="profile__username">${data.login}</p>
  `;

  element.innerHTML = markup;
}

export default renderUser;
