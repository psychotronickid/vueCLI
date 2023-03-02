<template>
  <div class="cart__order" v-for="cart in $store.state.order">
    <h2>Номер заказа: {{cart.id}}</h2>
    <p>Количество товаров: {{cart.products.length}}</p>
    <p>Сумма заказа: {{cart.order_price}}</p>
  </div>
</template>

<script>
export default {
  name: "Order"
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
</style>