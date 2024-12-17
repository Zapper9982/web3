const hre = require("hardhat");

async function main() {
  // Fetch the contract factory
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");

  // Deploy the contract
  console.log("Deploying the CrowdFunding contract...");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deployed();

  console.log("CrowdFunding contract deployed to:", crowdFunding.address);
}

main()
  .then(() => process.exit(0)) 
  .catch((error) => {
    console.error("Error deploying contract:", error);
    process.exit(1);
  });
