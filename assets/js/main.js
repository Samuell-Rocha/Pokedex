
function convertPokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.type_color}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>

            </li>
            `         
}

const pokemonList = document.getElementById('pokemonList') //ol

pokeApi.pl().then((pokemons) =>{
   pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')
})