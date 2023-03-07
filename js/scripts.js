let pokemonList = [
    {name: "Jigglypuff", height: "108", types: ["normal","fairy"]},
    {name: "Pikachu", height: "104", types: ["eletric"]},
    {name: "Charmeleon", height: "307", types: ["fire"]},
];

for (let i=0; i< pokemonList.length; i++) {
    if(pokemonList[i].height <110) {
        document.write(pokemonList[i].name + " is a very tiny Pokémon!");
    }else if(pokemonList[i].height >110 && pokemonList[i].height <300){
        document.write(pokemonList[i].name + " is a medium-size Pokémon!");
    }else{
    document.write(pokemonList[i].name + " is a huge Pokémon!!");
    }
}
