// SPDX-License-Identifier: MIT

pragma solidity > 0.8.7;

contract Counter {
    uint counter;

    constructor(uint _counter) {    
        counter = _counter;        
    }

    function get_counter() public view returns(uint) {
        return counter;
    }

    function increment_counter() public {
        counter ++;
    }
}