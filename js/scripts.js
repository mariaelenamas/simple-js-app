// pokemonList array wrapped in an IIFE

let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
            let pokemon = {
                name: item.name,
                detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
          // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }
      
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            console.log(item);
        });
    }


    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };

})();

    pokemonRepository.loadList().then(function() {
        pokemonRepository.getAll().forEach(function(pokemon) {
            pokemonRepository.addListItem(pokemon);
    });

});

    // pokemonRepository.addListItem(pokemon);
    //  if(pokemon.height <110) {
    //     document.write(pokemon.name + " is a very tiny Pokémon!<br>");
    //  }else if(pokemon.height >110 && pokemon.height <300){
    //     document.write(pokemon.name + " is a medium-size Pokémon!<br>");
    // }else{
    // document.write(pokemon.name + " is a huge Pokémon!!<br>");
    // }

    // pokemonList.forEach(addListItem);