const {ethers} = require('ethers')
const paypal = require('./paypal/paypal.json')

const provider = new ethers.providers.JsonRpcProvider("https://eth-rinkeby.alchemyapi.io/v2/jAENTthf_i6RehJXHXY6A84cRwCrmZzX")

// Contracts 
const paypalContract = new ethers.Contract('0x6170b96101557cc11F076AA3907f7FF87Db54EE7', paypal.output.abi, provider);

async function getData() {
    const get = await paypalContract.filters.recipeints()
    const trans = await paypalContract.queryFilter(get);
    console.log(trans)
  }
  
getData()