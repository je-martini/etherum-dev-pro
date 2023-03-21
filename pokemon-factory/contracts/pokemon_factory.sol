// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 < 0.9.0;

contract pokemon_factory {

    struct Pokemon {
        uint id;
        string name;
    }

    Pokemon[] private pokemons;

    mapping (uint => address) public pokemon_to_owner;
    mapping (address => uint) owner_pokemon_count;

    function create_pokemon (string memory _name, uint _id) public {
        pokemons.push(Pokemon(_id, _name));
        pokemon_to_owner[_id] = msg.sender;
        owner_pokemon_count[msg.sender]++;
    }

    function get_all_pokemons() public view returns(Pokemon[] memory){
        return pokemons;
    }

    function get_result() public pure returns(uint product, uint sum){
        uint a = 1;
        uint b = 2;
        product = a * b;
        sum = a + b;
    }
}