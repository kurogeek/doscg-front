<template>
  <div class="map">
      <h1>Map</h1>
      <!-- {{answer}} -->
    <TravelMap class="travel-map" />
  </div>
</template>

<script>
import Axios from "axios";
import TravelMap from "@/components/TravelMap";

export default {
  name: 'Map',
  components: {
      TravelMap,
  },
  data() {
      return {
          answer: null,
      }
  },
  mounted() {
      Axios.get("https://doscg-kurogeek.herokuapp.com/findBestWayFromSCGToCentrallWorld").
      then(res => {this.answer = res.data.data.attributes})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.travel-map {
    height: 400px;
}
</style>
