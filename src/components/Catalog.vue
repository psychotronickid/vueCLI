<template>
  <h3>Catalog</h3>
  <div>
    <Product v-for="prod in products.data" v-bind:key="prod.id" :prod-data="prod"></Product>
  </div>
</template>

<script>
import axios from "axios";
import Product from "@/views/Product";
export default {
  name: "Catalog",
  components: {Product},

  data(){
    return{
      products: [],
    }
  },

  mounted(){
    axios.get(this.$store.state.API + 'products').then((response)=>{
      this.products = response.data
    })
  }
}
</script>

<style scoped>
* {
  font-family: 'Poppins',sans-serif;
  color: #ffffff;
  letter-spacing: 0.15em;
  outline: none;
  border: none;
}
h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}
</style>