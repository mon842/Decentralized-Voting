/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/MoJ21ZXES5GY3CN0xoI6BjGQus5WozmH",
      accounts: [
        "43bc34798faa0c531d489612063cb160537e02f844070631d22da80e3a16f9ab",
      ],
    },
  },
};
