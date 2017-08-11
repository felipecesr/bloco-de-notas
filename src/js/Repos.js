function renderRepos(data, element) {
  const el = element;
  const markup = data.map(repo => `
    <li class="repository">
      <p class="repository__title">${repo.name}</p>
      <p class="repository__desc">${repo.description || ''}</p>
    </li>
  `).join('');

  el.innerHTML = markup;
}

export default renderRepos;
