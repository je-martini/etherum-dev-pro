const { expect } = require('chai');

describe('Pokemon Contract', function(){
    it("Pokemon Factory shouldn't pokemons", async function(){

        const PokemonFactory = await ethers.getContractFactory("pokemon_factory");

        const hardhatPokemon = await PokemonFactory.deploy();

        const pokemons = await hardhatPokemon.getAllPokemos();

        expect(pokemons.length).to.equal(0);
    } );
});