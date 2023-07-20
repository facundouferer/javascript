const pokemonForm = document.getElementById('pokemonForm');
const pokemonInput = document.getElementById('pokemonInput');
const pokemonInfo = document.getElementById('pokemonInfo');

pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pokemonName = pokemonInput.value;
    consultarPokemon(pokemonName);
});

const consultarPokemon = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/berry`)
        .then((response) => {
            if (!response.ok) {
                console.log(response)
                console.log('No existe el pokemon');
            }
            return response.json();
        })
        .then((data) => {
            mostrarPokemonInfo(data);
        })
        .catch((error) => {
            console.log("ERROR:", error);
        });
}

const mostrarPokemonInfo = (pokemonData) => {
    pokemonInfo.innerHTML = `
    <h2>${pokemonData.name}</h2>
    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
    <p>Altura: ${pokemonData.height}</p>
    <p>Peso: ${pokemonData.weight}</p>
    <p>Tipo(s): ${obtenerTipos(pokemonData.types)}</p>
  `;
}
