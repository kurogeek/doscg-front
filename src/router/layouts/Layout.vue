<template>
  <div class="layout">
      <Navbar />
      <div class="content">
        <slot />
      </div>
      <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default {
  name: 'Home',
  components: {
      Footer,
      Navbar,
  }
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
.content {
    min-height: 550px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 15%;
    padding-right: 15%;
}
</style>
