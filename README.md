<div id="top"></div>
<br />
<div align="center">

  <h3 align="center">KittyVerse</h3>

  <p align="center">
    A Decentralized Token for every cat lover!
    <br />
    <a href="https://jianzhuo.github.io/Meows_web3_release/">View Demo</a>
    ·
    <a href="https://github.com/Jianzhuo/Meows_web3/issues">Report Bug</a>
    ·
    <a href="https://github.com/Jianzhuo/Meows_web3/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Meows_web3](/screenshots/Meows_web3.png)

Since the launch of the Ethereum virtual machine EVM and smart contracts in 2014, the blockchain ecosystem has ushered in explosive development. This not only attracts more and more people to use and participate in the blockchain ecosystem, but also greatly reduces the technical threshold for developers to develop decentralized applications. 

In this project, while people explore and participate in the KittyVerse we build together, developers are also exploring the world of blockchain.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

We try to select the hottest and newest technologies to build our projects. This allows our project to perform better.

* [node.js](https://nodejs.org/)
* [React.js](https://reactjs.org/)
* [vite](https://vitejs.dev/)
* [tailwindcss](https://tailwindcss.com/)
* [solidity](https://docs.soliditylang.org)
* [hardhat](https://hardhat.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This project is developed under node.js, so a node.js environment is essential. In addition, since this is a web3.0 application, you also need to prepare a Metemask.

### Prerequisites

_Before start make sure installed both of our prerequisites._
* node.js
  The official Node.js website has installation instructions for Node.js: https://nodejs.org
* Metemask
  https://metamask.io/
* Add ropsten test network to Metemask.
  https://www.openattestation.com/docs/appendix/ropsten-setup/
* Get some Ropsten Eth.
  https://faucet.egorfine.com/



### Installation

_At present, this project consists of two parts: react front-end program and smart contract._

_Deveop & Deploy smart contract_
1. Install NPM packages
    ```sh
    cd smart_contract
    npm install
    ```
2. Replace the accounts: [] value with your own account pravite key at smart_contract/hardhat.config.js.
3. Deploy the smart contract
   ```sh
   npx hardhat run scripts/deploy.js -- ropsten
   ```

_Develop & Deploy react front-end program_
1. Clone the repo
   ```sh
   git clone https://github.com/Jianzhuo/Meows_web3.git
   ```
2. Install NPM packages
   ```sh
   cd client
   npm install
   ```
3. Replace the client/src/utils/MeowsToken.json with your own contract abi that generate by hardhat after deploy the contract.
4. Replace the contractAddress with your own contarct address at client/src/utils/contants.js.
5. To run the project at dev mode:
   ```sh
   npm run dev
   ```
6. To build the project to production:
   ```sh
   npx vite build --base=<base-path>
   ```
   

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Create smart contract to issue our ERC20 Token MEOWS.
- [x] Made a Web3.0 web application to interact with the smart contract.
- [x] Create smart contract allow user buy or sell MEOWS with ETH at a fixed rexchange ate.
- [ ] Improve the Dex to add Oracle Machine to make the exchange rate float.
- [ ] Add staking and LP reward to our project.
- [ ] Issue the NFT, allow user to mint, create and trade NFT.
- [ ] A MarketPlace for NFT Trading.
- [ ] Explore the DAO.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jianzhuo Shen - shenjianzhuo@gmail.com

* Project Link: [https://github.com/Jianzhuo/Meows_web3](https://github.com/Jianzhuo/Meows_web3)
* project Demo: [https://jianzhuo.github.io/Meows_web3_release/](https://jianzhuo.github.io/Meows_web3_release/)
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png