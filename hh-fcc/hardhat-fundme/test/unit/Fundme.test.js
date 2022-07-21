const { deployments } = require("hardhat")

describe("FundMe", async function() {
    beforeEach(async function() {
        // deploy our fundMe contract
        // using hardhat deploy
        // deploy all contracts with "all" tag
        await deployments.fixture(["all"])
    })
    describe("Contructor", async function() {})
})
