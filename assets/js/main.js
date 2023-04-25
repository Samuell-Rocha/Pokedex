
const pokemonList = document.getElementById('pokemonList') //ol
const buttonMore = document.getElementById('buttonMore')

let offset = 0;
const limit = 10;


function loadPokemonItens(offset, limit) {
    pokeApi.pl(offset, limit).then((pokemons) => {
       const newHtml = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type_color}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>

            </li>`).join('')

            pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

buttonMore.addEventListener('click', () =>{
    offset += limit
    loadPokemonItens(offset, limit)
})