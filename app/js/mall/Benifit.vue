<template>
  <panel title="优惠福利" class="benifit-panel">
    <section class="benifit-content">
      <img src="../../image/youhui1.png" alt />
      <img src="../../image/youhui2.png" alt />
    
    </section>
  </panel>
</template>
<script>
import Panel from "../core/panel";
export default {
  name: "QianDao",
  components: {
    Panel
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" >
@import "../../css/element.scss";
.benifit-panel {
  @include panel;
  overflow:hidden;  
  box-sizing: border-box;
  .benifit-content {
    height: 240px;
    img {
      position: absolute;
      box-sizing: border-box;
      &:first-child {
        width: 50%;padding: 20px;
      }
      &:last-child {
        width: 50%;
        right: 0;
        padding: 20px;
      }
    }
  }
}
</style>

