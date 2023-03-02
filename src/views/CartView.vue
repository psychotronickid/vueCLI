<template>
  <div class="cart__inner" v-for="cart in $store.state.cart">
    <h2>{{cart.name}}</h2>
    <p class="price">Цена: {{cart.price}}</p>
    <button @click="removeCart(cart)" class="btn__remove">Убрать товар</button>
  </div>
</template>

<script>
export default {
  name: "CartView",
  methods:{
    removeCart(card){
      this.$store.dispatch('REMOVE_CART', card.id)
      this.$store.dispatch('GET_CART')
    }
  },
}
</script>
<style scoped>

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
</style>