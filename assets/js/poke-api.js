const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
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
