<template lang="html">
    <div>
      <MyHeader/>
      <MySlider/>
      <New/>
    </div>
</template>

<script>
import MyHeader from './MyHeader'
import MySlider from './MySlider'
import New from './New'
export default {
  name:'home',
  components:{
    MyHeader,
    MySlider,
    New
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
