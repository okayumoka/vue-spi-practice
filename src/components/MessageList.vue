<template>
  <div class="MessageList">
    <h2>Messages:</h2>
    <ul>
      <li class="message-box" v-for="m in messages" :key="m.hash">
        <!-- {{JSON.stringify(m)}} -->
        <p class="message-txt">{{m.message}}</p>
        <div class="message-xem">Pay: {{m.xem}} XEM</div>
        <div class="message-fee">Fee: {{m.fee}} XEM</div>
        <br>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '../../nemconfig.json'
import {AccountHttp, Address} from 'nem-library'
import nem from 'nem-sdk'

const walletaddress = config.address

export default {
  name: 'MessageList',
  data () {
    return {
      messages: {}
    }
  },
  created: function () {
    console.log('on created component')

    const address = new Address(walletaddress)
    const accountHttp = new AccountHttp()
    accountHttp.allTransactions(address, {pageSize: 100}).subscribe(transactions => {
      console.log(transactions)
      this.messages = transactions.map(trans => {
        let message = trans.message.payload
        if (message === null || message === '') {
          message = 'Empty.'
        } else {
          message = nem.utils.format.hexToUtf8(message)
        }
        return {
          hash: trans.transactionInfo.hash.data,
          id: trans.transactionInfo.id,
          fee: trans.fee / 100000,
          xem: trans._xem.amount,
          message: message
        }
      })
      console.log(this.messages)
    })
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 15px;
  padding: 0;
  text-align: left;
}
li.message-box {
  margin: 10px;
  padding: 10px;
  border: solid 1px gray;
  border-radius: 5px;
}
</style>
