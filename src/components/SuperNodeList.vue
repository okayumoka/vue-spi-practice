<template>
  <div class="super-node-list">
    This is Super node list.
  </div>
</template>

<script>
import nem from 'nem-sdk'

console.log(nem.model.nodes.mainnet)

export default {
  name: 'SuperNodeList',
  created: function () {
    console.log('on created component')
  }
}
</script>

<style scoped>
</style>
