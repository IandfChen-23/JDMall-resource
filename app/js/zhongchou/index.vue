<template lang="html">
   <div>
<z-slider class='zSlider'/>
    <benifit/>
   </div>
    
</template>

<script>
import zSlider from "./zSlider";
import Benifit from "./Benifit";
export default {
  name: "Money",
  components: {
    zSlider,
    Benifit
  }
};
</script>

<style lang="scss" module>
.zSlider {
  margin-top: 100px;
}
</style>
