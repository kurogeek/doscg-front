<template>
  <div class="bc">
      <h2>Question: If A = 21, A + B = 23, A + C = -21 - Please find B and C value</h2>
      <hr>
      <h3 v-if="answer">Answer: B = {{answer.b}} and C = {{answer.c}}</h3>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: 'BC',
  data() {
    return {
      answer: null,
    }
  },
  mounted() {
      Axios.
      get("https://doscg-kurogeek.herokuapp.com/find-bc").
      then(res => {
        if (res.data.data != null ){
          this.answer = res.data.data.attributes
        }
      }).catch(err => {console.log(err)})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bc {
    float: left;
}
h2, h3 {
    text-align: left;
}

</style>
