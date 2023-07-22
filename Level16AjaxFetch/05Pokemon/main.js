const pokemonForm = document.getElementById('pokemonForm');
const pokemonInput = document.getElementById('pokemonInput');


pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pokemonName = pokemonInput.value;
    consultarPokemon(pokemonName);
});

const consultarPokemon = async (pokemonName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        mostrarPokemonInfo(data);
    } catch (error) {
        console.log('Error al consultar el pokemon', error);
    }
}

const mostrarPokemonInfo = (pokemonData) => {
    console.log(pokemonData);
    const pokemonInfo = document.getElementById('pokemonInfo');
    pokemonInfo.innerHTML = `
    <h2>${pokemonData.name}</h2>
    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
    <p>Altura: ${pokemonData.height}</p>
    <p>Peso: ${pokemonData.weight}</p>
  `;
}

const listaDePokemones = async (limit, offset) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        const lista = document.getElementById('pokemonList');
        data.results.forEach((pokemon) => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'col-md-4');
            listItem.style.cursor = 'pointer';
            listItem.innerText = pokemon.name;
            listItem.addEventListener('click', () => consultarPokemon(pokemon.name));
            lista.appendChild(listItem);
        });
    } catch (error) {
        console.log('Error al consultar la lista de pokemones', error);
    }
}

listaDePokemones(50, 0);