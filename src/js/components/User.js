const user = (data) => {
  const markup = `
    <div class="profile" id="profile">
      <img class="profile__photo" src="${data.avatar_url}" alt="${data.name}">
      <p class="profile__name">${data.name}</p>
      <p class="profile__username" id="username">${data.login}</p>
    </div>
  `;

  return markup;
};

export default user;
