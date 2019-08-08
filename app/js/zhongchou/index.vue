<template lang="html">
   <div>
    <z-slider class='zSlider'/>
    <benifit/>
    <recommand/>  
   </div>
    
</template>

<script>
import zSlider from "./zSlider";
import Benifit from "./Benifit";
import Recommand from "./recommand";
export default {
  name: "Money",
  components: {
    zSlider,
    Benifit,
    Recommand
  }
};
</script>

<style lang="scss" module>
.zSlider {
  margin-top: 100px;
}
</style>
