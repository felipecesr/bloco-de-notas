const follow = (data) => {
  const markup = `
    <ul class="follow" id="follow">
      <li class="follow__item">
        <span class="follow__item--value">${data.followers}</span> Followers
      </li>
      <li class="follow__item">
        <span class="follow__item--value">${data.following}</span> Following
      </li>
    </ul>
  `;

  return markup;
};

export default follow;
