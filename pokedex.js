const tableBody = document.getElementById('pokemon-body');
const searchInput = document.getElementById('search');

function renderTable(data) {
  tableBody.innerHTML = '';
  data.forEach(pokemon => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${pokemon.id}</td>
      <td>${pokemon.name}</td>
      <td>${pokemon.types.join(', ')}</td>
    `;
    tableBody.appendChild(row);
  });
}

function searchPokemon() {
  const query = searchInput.value.toLowerCase();
  const filtered = pokemonData.filter(p => p.name.toLowerCase().includes(query));
  renderTable(filtered);
}

searchInput.addEventListener('input', searchPokemon);

// initial render
renderTable(pokemonData);
