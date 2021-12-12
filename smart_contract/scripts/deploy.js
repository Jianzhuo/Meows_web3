const main = async() => {
  const MeowsToken = await hre.ethers.getContractFactory("MEOWS");
  const meowsToken = await MeowsToken.deploy();

  await meowsToken.deployed();

  console.log("MeowsToken deployed to:", meowsToken.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  }catch {
    console.error(error);
    process.exit(1);
  }
}

runMain()