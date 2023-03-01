<template>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/catalog">Catalog</router-link> |
    <router-link to="/basket">Basket</router-link> |
    <router-link to="/orders">Orders</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6c6e69;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #6c6e69;
}
nav a.router-link-exact-active {
  color: white;
}
</style>