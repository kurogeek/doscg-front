<template>
  <div class="bestway">
    <h2>Finding the best way to go to Central World from SCG Bangsue.</h2>
    <GoogleMapLoader
      class="map"
      :mapConfig="mapConfig"
      v-bind:center="center"
      :apiKey="apiKey"
    >
      <template slot-scope="{ google, map }">
        <GoogleMapMarker
          v-for="marker in markers"
          :key="marker.id"
          :marker="marker"
          :google="google"
          :map="map"
          :label="marker.label"
        />
        <GoogleMapLine
          v-for="line in lines"
          :key="line.id"
          :path.sync="line.path"
          :google="google"
          :map="map"
        />
      </template>
    </GoogleMapLoader>
  </div>
</template>

<script>
import Axios from "axios";
import GoogleMapLoader from "@/components/GoogleMapLoader";
import GoogleMapMarker from "@/components/GoogleMapMarker";
import GoogleMapLine from "@/components/GoogleMapLine";
import { mapSettings } from "@/constants/mapSettings";

const apiHost = process.env.VUE_APP_API_HOST;
const googleKey = process.env.VUE_APP_GOOGLE_KEY

export default {
  name: "Map",
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapLine
  },
  data() {
    return {
      answer: null,
      center: {
        lat: 1,
        lng: 1
      },
      markers: [],
      lines: [],
      apiKey: googleKey,
    };
  },
  mounted() {
    const url = apiHost + "/findBestWayFromSCGToCentrallWorld";

    Axios.get(url).then(res => {
      let answer = res.data.data.attributes;
      let originLocation = answer.originLocation;
      let destinationLocation = answer.destinationLocation;
      this.markers.push(
        {
          label: "Origin",
          position: originLocation.location
        },
        {
          label: "Destination",
          position: destinationLocation.location
        }
      );
      this.lines = [{ path: answer.polyline }];
      this.center = {
        lat: originLocation.location.lat,
        lng: originLocation.location.lng
      };
    });
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },
    mapCenter() {
      return this.center;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
  height: 500px;
}
</style>
