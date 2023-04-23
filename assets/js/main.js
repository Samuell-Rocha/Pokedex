
function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
                <span class="number">${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">${verifica(pokemon.types[0])}</li>
                        <li class="type">${verifica(pokemon.types[1])}</li>
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}r">
                </div>

            </li>
            `
          
}

const pokemonList = document.getElementById('pokemonList') //ol


function verifica(types) {
    if (typeof types == "undefined") {
        return null
    }
    else {
        return types.type.name
    }

}

pokeApi.pl().then((pokemons) =>{
   pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')
})


