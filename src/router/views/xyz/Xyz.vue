<template>
  <div class="xyz">
      <h2>Question: X, Y, 5, 9, 15, 23, Z  - Please finding X, Y, Z value</h2>
      <h3 v-if="answer">Answer: X={{answer.x}}, Y={{answer.y}} and Z={{answer.z}}</h3>
  </div>
</template>

<script>

import Axios from 'axios';

export default {
  name: 'XYZ',
  data() {
    return {
      answer: null
    }
  },
  mounted() {
    Axios.
      get("https://doscg-kurogeek.herokuapp.com/find-xyz").
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
.xyz {
  float: left;
}
h3 {
  float: left;
}
</style>
