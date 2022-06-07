const main = async () => {
  const [owner, random] = await hre.ethers.getSigners();
  const domainContractFactory = await hre.ethers.getContractFactory("Domains");
  const domainContract = await domainContractFactory.deploy('ninja');
  await domainContract.deployed();
  console.log(`domainContract is deployed at ${domainContract.address}`);
  console.log(`domainContract is deployed by ${owner.address}`);

  let txn = await domainContract.register("hello", {value:hre.ethers.utils.parseEther('0.1')});
  await txn.wait();

  const ow = await domainContract.getAddress("hello");
  console.log(`Owner of hello is ${ow}`);

  // txn = await domainContract
  //   .connect(random)
  //   .setRecord("hello", "https://twitter.com/YogeshK170201");
  
  // await txn.wait();
  // const record = await domainContract.connect(owner).getRecord("hello");
  // console.log(record);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract Balance: ", hre.ethers.utils.formatEther(balance));
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

runMain();
