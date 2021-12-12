// https://eth-ropsten.alchemyapi.io/v2/DR3NWMx-DX1xriDAY1yFOE6mcCoxyYyE

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/DR3NWMx-DX1xriDAY1yFOE6mcCoxyYyE',
      accounts: [ 'b69f82f18188f7d7149210d50b37a34b67e6d90896b293830cfb500de1247ae0' ]
    }
  }
}