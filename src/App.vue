<template>
  <nav>
    <router-link to="/home">Home</router-link>
    <router-link to="/catalog">Catalog</router-link>
    <router-link to="/cart ">Cart</router-link>
    <router-link to="/orders">Orders</router-link>
    <router-link to="/logout">Sign Out</router-link>
    <router-link to="/login">Sign In</router-link>
    <router-link to="/register">Register</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #6c6e69;
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
  color: #6c6e69;
  text-decoration: none
}
nav a.router-link-exact-active {
  color: white;
}
</style>