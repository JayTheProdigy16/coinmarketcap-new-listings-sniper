require('dotenv').config();
const token = process.env.mainnet;
const W3 = require('web3');


const main = async() => {
    const w3 = new W3('https://bsc-dataseed.binance.org/')
    const priv = ''; // Private Key
    const recipt = ''; // your wallet
    const account = w3.eth.accounts.privateKeyToAccount(priv);
    const balance = w3.utils.fromWei(await w3.eth.getBalance(account.address), 'ether')
    const nonce = w3.eth.getTransactionCount(account)

    //console.log(balance)
    const gasPrice = await w3.eth.getGasPrice.();
    const gasLimit = 200000;
    const f = gasPrice *gasLimit;
    const fee = w3.utils.fromWei(f.toString(), 'ether');
    const v = balance - fee;
    const tx = {}
          tx.from = account.address;
          tx.to = recipt;
          tx.gasPrice = w3.utils.numberToHex(gasPrice)
          tx.gasLimit = w3.utils.numberToHex(gasLimit)
          tx.value = w3.utils.toWei(v.toString(), 'ether');
          w3.eth.getTransactionCount(accountAddress)
    if(v > balance){
        console.error('Not enough gas')
    } else if(v < 0 ) {
        console.error('insufficient balance')
    } else {
        const sign = await account.signTransaction(tx).then(err => {})
        const send = await w3.eth.sendSignedTransaction(sign.rawTransaction).then(err => {})
        console.log(send.transactionHash)
    }
}
setInterval(function() {
    main()
}, 5000);