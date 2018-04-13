<template>
  <div id="app">
    <h1>Vue spa practice</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/super-node-list">SuperNodeList</router-link>
    <br>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// Initialize NEMLibrary for TEST_NET Network
import {NEMLibrary, NetworkTypes} from 'nem-library'
NEMLibrary.bootstrap(NetworkTypes.TEST_NET)

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
