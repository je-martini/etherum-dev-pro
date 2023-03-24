require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Ij_8tILhPk1tsnNPq0zHnAzAwcRz-5_e",
      accounts: [
        '1c04dc5ef858bad4f49b7bf6683de4d3b43c5ca75eb8b28a7aa6dc266c0b50c0'
      ]
    }
  }
};
