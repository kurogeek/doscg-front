<template>
    <b-navbar id="navbar" type="dark" variant="info">
        <b-navbar-brand>DOSCG</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
              <b-nav-item to="/doscg">YXZ</b-nav-item>
              <b-nav-item to="/bc">BC</b-nav-item>
              <b-nav-item to="/map">Map</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

    </b-navbar>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
