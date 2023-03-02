<template>
  <div class="home">
    <h3>Welcome to My Website</h3>
    <p>On this website you can order any products</p>
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
  background-image: linear-gradient(to left, #651c9a, #b393d3);
  color: transparent;
  -webkit-background-clip: text;
}

p {
  font-size: 30px;
  font-weight: 600;
  background-image: linear-gradient(to left, #651c9a, #b393d3);
  color: transparent;
  -webkit-background-clip: text;
}
</style>