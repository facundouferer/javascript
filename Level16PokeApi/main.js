const pokemonForm = document.querySelector('#pokemonForm');
const pokemonInput = document.querySelector('#pokemonInput');

pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pokemon = pokemonInput.value;
    consultarPokemon(pokemon)
})

const consultarPokemon = async (nombrePokemon) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        const data = await respuesta.json();
        mostrarPokemon(data)
    } catch (error) {
        console.log("ERROR AL BUSCAR EL POKEMÓN: ", error)
    }
}

const mostrarPokemon = (data) => {
    const pokemonInfo = document.querySelector('#pokemonInfo');
    pokemonInfo.innerHTML = `
    <h1>${data.name}</h1>
    <img src="${data.sprites.front_default}" alt="${data.name}"/>
    <p>Especie: ${data.species.name}</p>
    `;
}

const listarPokemones = async (limit, offset) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        const data = await respuesta.json()
        const listaDePokemones = document.querySelector('#listaDePokemones');
        data.results.forEach(pokemon => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'col-6');
            li.innerHTML = pokemon.name;
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => consultarPokemon(pokemon.name))
            listaDePokemones.appendChild(li);
        });
    } catch (error) {
        console.log("ERROR AL listar: ", error)
    }
}
let limit = 10;
let offset = 0;

const cargarMas = document.querySelector('#cargarMas');
cargarMas.addEventListener('click', () => {
    limit = limit + 10;
    offset = offset + 10;
    listarPokemones(limit, offset)
})

listarPokemones(20, 0)