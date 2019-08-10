<template>
  <div class="shopping-cart">
    <div v-if="!cartProducts.length" class="kong">
      <img src="../../image/cart.png" alt class="cart-img" />
      <div class="cart-desc">你的购物车还是空的</div>
      <button class="cart-button">马上去购物</button>
    </div>
    <table class="table table-striped" v-if="cartProducts.length">
      <caption style="text-align:center;font-weight:800;margin:50px">已购商品</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shop,index) in cartProducts" :key="index">
          <td>{{ shop.title }}</td>
          <td>{{ shop.price }}</td>
          <td>
            <div @click="delProduct(index)" class="btn btn-danger btn-lg">删除</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Panel from "../core/panel";

export default {
  name: "ShoppingCart",
  components: {
    Panel
  },
  data() {
    return {};
  },
  computed: {
    cartProducts() {
      return this.$store.getters.added;
    }
  },
  methods: {
      delProduct(index){
        this.$store.commit("subtract",{index})  
      }
  },
};
</script>

<style lang="scss">
.shopping-cart {
  margin-top: 3.5rem;
}
table {
  thead {
    font-size: 30px;
  }
  tbody {
    font-size: 28px;
  }
}
.kong {
  height: 900px;
  text-align: center;
  margin-top: 100px;
  .cart-img {
      margin-top: 200px;
    width: 50%;
  }
  .cart-desc {
    color: #ddd;
    padding: 30px;
  }
  .cart-button {
      margin-top: 40px;
    padding: 30px;
    border-radius: 1.04688rem;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    color: #fff;
    letter-spacing: 0;
    background-image: linear-gradient(-129deg, #f04752, #f04752);
    width: 50%;
    height: 2.2rem;
  }
}
</style>
