<template>
  <div class="home">
      <h1>Welcome to KuroGeek Homepage</h1>
      <img src="../../../assets/logo.png" alt="VueLogo" />
      <div>
          <router-link to="/doscg" tag="b-button">Goto DOSCG</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    margin-top: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
