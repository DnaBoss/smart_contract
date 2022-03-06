const Box = artifacts.require("Box");
const Auth = artifacts.require("Auth");
module.exports = function (deployer) {
  deployer.then(async () => { 
    await deployer.deploy(Auth);
    await deployer.deploy(Box,Auth.address);
  })
};
