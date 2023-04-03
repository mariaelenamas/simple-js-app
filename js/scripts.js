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

    // function showDetails (pokemon) {
    //     console.log(pokemon.name)
    // }

    function addListItem(pokemon) {
    let ul = document.querySelector('.pokemon-list'); 
    let listItem = document.createElement('li'); 
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("pokemonButton");
    listItem.appendChild(button);
    pokemonListItems.appendChild(listItem);

    }


    // pokemonRepository.getAll().forEach(function(pokemon) {
    //     if(pokemon.height <110) {
    //         document.write(pokemon.name + " is a very tiny Pokémon!<br>");
    //     }else if(pokemon.height >110 && pokemon.height <300){
    //         document.write(pokemon.name + " is a medium-size Pokémon!<br>");
    //     }else{
    //     document.write(pokemon.name + " is a huge Pokémon!!<br>");
    //     }
    // })
    
    pokemonList.forEach(addListItem);

    return {
        add: add,
        getAll: getAll
    };

})();
