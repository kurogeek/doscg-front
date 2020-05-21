<template>
  <div class="footer">
    <span>Power By Kurogeek 2020</span>
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
    padding-top: 40px;
    padding-bottom: 40px;
}
p {
    color: black;
    padding: 0;
}

</style>
