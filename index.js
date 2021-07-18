const axios = require('axios');
const inquire = require('inquirer');

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

function PokemonMove(){
    this.moveName = "";
    this.moveType = "";
}

function Pokemon(){
    this.name = "";
    this.type = "";
    this.hp = 0;
    this.atk = 0;
    this.def = 0;
    this.sp = 0;
    this.moves = [
        new PokemonMove(),
        new PokemonMove(),
        new PokemonMove(),
        new PokemonMove()
    ];
}

const init = async () => {
    const resp = await axios.get(url);
    const pokemonData = await resp.data;
    console.log(pokemonData);
}

init();