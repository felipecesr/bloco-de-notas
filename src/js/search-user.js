const searchUser = username =>
  fetch(`https://api.github.com/users/${username}`)
    .then(data => data.json());

export default searchUser;
