require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "YOUR_ALCHEMY_MUMBAI_URL",
      accounts: ["YOUR_TEST_WALLET_PRIVATE_KEY"],
    },
  },
};
