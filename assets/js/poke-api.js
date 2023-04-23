const pokeApi = {}


function convertPokeApiDetailtoPokemon(pokeDetail){
    const pokemon = new Pokemon()

    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name

    const types =  pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const[type] = types

    pokemon.types = types
    pokemon.type_color = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then( convertPokeApiDetailtoPokemon)
}

pokeApi.pl = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//---------------requisição da lista de pokemons-----------------
    return fetch(url) 
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailsRequest) => Promise.all(detailsRequest))  // lista de json em detalhes
        .then((pokemonDetail) => (pokemonDetail) )      
        .catch((error) => console.error(error))
}
