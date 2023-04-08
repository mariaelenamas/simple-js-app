// pokemonList array wrapped in an IIFE

let pokemonRepository = (function () {
    let pokemonList = [
        {name: "Jigglypuff", height: "108", types: ["normal","fairy"]},
        {name: "Pikachu", height: "104", types: ["eletric"]},
        {name: "Charmeleon", height: "307", types: ["fire"]},
    ];

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ){
        pokemonList.push(pokemon);
        } else {
        console.log("pokemon is not correct");
        }
    }

    function getAll() {
        return pokemonList;
    }

    function showDetails(pokemon) {
        console.log(pokemon.name)
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list"); 
        let listItem = document.createElement("li"); 
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("pokemon-button");
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        button.addEventListener('click', function () {
            showDetails(pokemon)
    
        });
    
    }

   

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };

})();

    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    })

    // pokemonRepository.addListItem(pokemon);
    //  if(pokemon.height <110) {
    //     document.write(pokemon.name + " is a very tiny Pokémon!<br>");
    //  }else if(pokemon.height >110 && pokemon.height <300){
    //     document.write(pokemon.name + " is a medium-size Pokémon!<br>");
    // }else{
    // document.write(pokemon.name + " is a huge Pokémon!!<br>");
    // }

    // pokemonList.forEach(addListItem);