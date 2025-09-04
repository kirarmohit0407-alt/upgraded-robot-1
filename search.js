const searchInput = document.getElementById('searchInput');
const suggestionsContainer = document.getElementById('suggestions');

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  suggestionsContainer.innerHTML = '';
  if (!query) {
    suggestionsContainer.style.display = 'none';
    return;
  }
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  if (filtered.length === 0) {
    suggestionsContainer.style.display = 'none';
    return;
  }
  filtered.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('suggestion-item');
    div.innerHTML = '🔍 ' + product.name;
    div.onclick = () => { window.location.href = product.url; };
    div.addEventListener('mousedown', () => {
      div.style.animation = 'clickBounce 0.24s';
    });
    div.addEventListener('animationend', () => {
      div.style.animation = '';
    });
    suggestionsContainer.appendChild(div);
  });
  suggestionsContainer.style.display = 'block';
});

document.addEventListener('click', e => {
  if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
    suggestionsContainer.style.display = 'none';
  }
});
