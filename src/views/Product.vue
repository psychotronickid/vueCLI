<template>
  <div class="product">
    <h3>{{ prodData.name }}</h3>
    <p>{{ prodData.description }}</p>
    <div class="product__price">
      <p>Price: {{ prodData.price }}</p>
      <button @click="addToCart(prodData)" v-if="this.$store.state.token">To cart</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Product",
  props: ['prodData'],
  methods: {
    addToCart(card) {
      this.$store.dispatch('ADD_TO_CART', card.id)
      this.$store.dispatch('GET_CART')
    },
  }
}
</script>

<style scoped>
.product {
  background-color: rgba(255,255,255,0.13);
  padding-top: 20px;
  padding-bottom: 40px;
  margin-top: 20px;
  border: 2px solid rgba(255,255,255,0.1);
}
button{
  margin-top: 20px;
  background-color: #ffffff;
  color: #080710;
  width: 300px;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}
</style>