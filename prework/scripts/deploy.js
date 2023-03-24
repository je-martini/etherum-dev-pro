const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deployer', deployer);

    const counter0 = await ethers.getContractFactory('Counter');
    const counter1 = await counter0.deploy(0) 
    
    console.log('counter contract address', counter1.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
})