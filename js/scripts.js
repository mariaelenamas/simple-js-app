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
        loadDetails(pokemon).then(function () {
        showModal(pokemon)
        console.log(pokemon.name)
        });
    }

    // every pokemon button on the list 
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
        showLoadingMessage()
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
            let pokemon = {
                name: item.name,
                detailsUrl: item.url
            };
            add(pokemon);
            // console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function showLoadingMessage(){

        //replcae with any loading animation 
        alert('loading....')
     }
    // update the pokemon with details from URL 
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
    let closeModal = document.getElementsByClassName("close")[0];
    let modal = document.getElementById("myModal");

    // function to call the modal 
    function showModal(pokemon){
        // Get the <span> element that closes the modal
        //console.log(pokemon)
            modal.style.display = "block";
         let img = document.getElementById('modalImg')
         img.src = pokemon.imageUrl
         let title = document.getElementById('modalTitle')
         title.innerText = pokemon.name

         let details = document.getElementById('modalTxt')
         details.innerText = 'types :' + pokemon.types.map(x=>x.type.name) + ' Height :  ' + pokemon.height
    }


// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// End modal JS



    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
    };

})();

    pokemonRepository.loadList().then(function() {
        pokemonRepository.getAll().forEach(function(pokemon) {
            pokemonRepository.addListItem(pokemon);
    });

});

    // pokemonRepository.addListItem(pokemon);
    // if(pokemon.height <110) {
    //     document.write(pokemon.name + " is a very tiny Pokémon!<br>");
    // }else if(pokemon.height >110 && pokemon.height <300){
    //     document.write(pokemon.name + " is a medium-size Pokémon!<br>");
    // }else{
    // document.write(pokemon.name + " is a huge Pokémon!!<br>");
    // }

    // pokemonList.forEach(addListItem);