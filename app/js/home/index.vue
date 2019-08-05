<template lang="html">
    <div>
      <MyHeader/>
      <MySlider/>
      <New/>
      <Money/>
      <Product/>
    </div>
</template>

<script>
import MyHeader from './MyHeader'
import MySlider from './MySlider'
import New from './New'
import Money from './Money'
import Product from './Product'
export default {
  name:'Home',
  components:{
    MyHeader,
    MySlider,
    New,
    Money,
    Product
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home{
    color: red;
    font-size: 80px;
  }
</style>
