const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy(unlockTime, { value: lockedAmount });

  await crowdFunding.deployed();

  console.log(
    `CrowdFunding deployed to ${crowdFunding.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
