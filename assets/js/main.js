
function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
                <span class="number">${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">${pokemon.types[0].type.name}</li>
                        <li class="type">ggrass</li>
                    </ol>
                    <img src="/assets/img/bulbasaur-seeklogo.com.svg" alt="${pokemon.name}">
                </div>

            </li>
            `
}

const pokemonList = document.getElementById('pokemonList')


function verifica(type) {
    if (typeof type == "undefined") {
        return null
    }
    else {
        return type.type.name
    }

}

pokeApi.pl().then((pokemons) =>{
    pokemonList.innerHTML+= pokemons.map(convertPokemonToLi).join('')
})