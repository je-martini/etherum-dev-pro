const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Counter contract', () => {
    it('should increment the counter',  async() => {
        const counter0 = await ethers.getContractFactory('Counter');
        const counter1 = await counter0.deploy(0) 
        await counter1.increment_counter()
        const updated_counter = counter1.getCounter();

        expect(updatedCounter).to.equal(1)
    })
})