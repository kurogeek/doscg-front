<template>
  <div id="doscg">
    <Layout>
        <router-view/>
    </Layout>
  </div>
</template>

<script>
import Layout from "../../layouts/Layout.vue";

export default {
  name: 'DoSCG',
  components: {
    Layout,
  },
  
}
</script>

<style scoped>

</style>
