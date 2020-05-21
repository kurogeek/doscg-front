<template>
  <div class="bc">
      <h2>Question: If A = 21, A + B = 23, A + C = -21 - Please find B and C value</h2>
      <h3 v-if="answer">Answer: B={{answer.b}} and C={{answer.c}}</h3>
  </div>
</template>

<script>
export default {
  name: 'BC',
  data() {
    return {
      answer: null,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
