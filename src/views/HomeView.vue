<template>
  <div class="home">
    <h3><p style="display:inline">Welcome to</p> <p style="display:inline">My Website</p></h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>

h3 {
  font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  -webkit-background-clip: text;
}

img {
  width: 1400px;
  height: 600px;
}
</style>