<template>
  <div class="super-node-list">
    This is Super node list.
  </div>
</template>

<script>
// import nem from 'nem-sdk'
//
// console.log(nem.model.nodes.mainnet)
// import {AccountHttp, NEMLibrary, NetworkTypes, Address} from "nem-library"
import config from '../../nemconfig.json'
import {AccountHttp, Address} from 'nem-library'
// NEMLibrary.bootstrap(NetworkTypes.TEST_NET)

// const privateKey = config.privateKey
const walletaddress = config.address

// Initialize NEMLibrary for TEST_NET Network
export default {
  name: 'SuperNodeList',
  created: function () {
    console.log('on created component')
    // console.log(`walletaddress: ${walletaddress}`)
    // console.log(`privatekey: ${privateKey}`)
    // console.log(config)
    // console.log(walletaddress)
    // console.log(privateKey)
    const address = new Address(walletaddress)
    const accountHttp = new AccountHttp()
    accountHttp.getFromAddress(address).subscribe(accountInfoWithMetaData => {
      console.log(accountInfoWithMetaData)
    })
    accountHttp.allTransactions(address, {pageSize: 5}).subscribe(transactions => {
      console.log(transactions)
    })
    accountHttp.unconfirmedTransactions(address).subscribe(transactions => {
      console.log(transactions)
    })
  }
}
</script>

<style scoped>
</style>
