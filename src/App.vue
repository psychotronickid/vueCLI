<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="catalog">Catalog</router-link>
    <router-link to="cart">Cart</router-link>
    <router-link to="orders">Orders</router-link>

    <router-link v-if="this.$store.state.token" to="logout" @click="logout">Sign Out</router-link>
    <router-link v-if="!this.$store.state.token" to="login">Sign In</router-link>
    <router-link v-if="!this.$store.state.token" to="register">Sign Up</router-link>
  </nav>
  <hr/>
  <router-view/>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch('SIGN_OUT')
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  /*color: #6c6e69;*/
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  background-color: #080710;
}

nav {
  display: flex;
  padding: 30px;
  justify-content: space-around;
}
nav a {
  font-weight: bold;
  color: white;
  text-decoration: none
}
nav a.router-link-exact-active {
  color: #b393d3;
}
</style>