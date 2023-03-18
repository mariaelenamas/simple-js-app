// pokemonList array wrapped in an IIFE

let pokemonRepository = (function () {

    let pokemonList = [
        {name: "Jigglypuff", height: "108", types: ["normal","fairy"]},
        {name: "Pikachu", height: "104", types: ["eletric"]},
        {name: "Charmeleon", height: "307", types: ["fire"]},
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };

})();

    pokemonRepository.getAll().forEach(function(pokemon) {
        if(pokemon.height <110) {
            document.write(pokemon.name + " is a very tiny Pokémon!");
        }else if(pokemon.height >110 && pokemon.height <300){
            document.write(pokemon.name + " is a medium-size Pokémon!");
        }else{
        document.write(pokemon.name + " is a huge Pokémon!!");
        }
    })
    
