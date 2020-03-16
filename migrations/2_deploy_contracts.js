//const Token = artifacts.require("Token");
const DeFi = artifacts.require("DeFi");

module.exports = function(deployer) {
  deployer.deploy(DeFi);
  //deployer.link(Token, DeFi);
};
