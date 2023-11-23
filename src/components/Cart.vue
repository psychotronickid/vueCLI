<template>
  <div class="cart">

    <div class="order">
      <h3>Корзина</h3>
      <p>В корзине: {{$store.state.cart.length}} товаров</p>
      <p>Общая сумма заказа:  {{ totalAmount }}</p>
      <button class="btn_order" @click="toCard">Оформить заказ</button>
    </div>
    <div class="cart__inner" v-if="$store.state.cart.length > 0">
      <cart-view></cart-view>
    </div>

    <div class="empty__cart" v-else>
        Корзина пуста
    </div>



  </div>
</template>

<script>
import Product from "@/views/Product";
import CartView from "@/views/CartView";
export default {
  name: "Cart",
  components:{CartView, Product},
  data() {
    return {
      sum: 0
    }
  },
  methods:{
    toCard(){
      this.$store.dispatch('TO_ORDER')
    }
  },
  computed: {
    totalAmount() {
      this.sum = 0
      this.$store.state.cart.forEach(card => {
        this.sum += card.price
      })
      return this.sum
    }
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
.empty__cart {
  margin: 20px;
}
button {
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