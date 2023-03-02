<template>
  <div class="product">
    <h3>{{ prodData.name }}</h3>
    <p>{{ prodData.description }}</p>
    <div class="product__price">
      <p>Price: {{ prodData.price }}</p>
      <button v-if="this.$store.state.token" @click="addToCart">To cart</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Product",
  props: ['prodData'],
  methods: {
    addToCart() {
      this.$store.dispatch('ADD_TO_CART', this.prodData.id)
    },
  }
}
</script>

<style scoped>

</style>