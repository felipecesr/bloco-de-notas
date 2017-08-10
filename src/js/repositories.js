const getRepositories = username =>
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(data => data.json());

export default getRepositories;
