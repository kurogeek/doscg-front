<template>
  <div class="footer">
    <p>Power By Kurogeek</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
    background-color: grey;
}
p {
    color: black;
}
</style>
