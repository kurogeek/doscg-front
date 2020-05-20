<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
        <router-link to="/test">test</router-link>
        <router-link to="/foo">foo</router-link>
        <router-link to="/bar">bar</router-link>
    </p>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
body {
    margin: 0px;
}
</style>
