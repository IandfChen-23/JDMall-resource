<template>
  <Panel title="新品推荐" class="panel">
    <section class="content">
      <Slider :options="options" :items="items" class="product-slider"></Slider>
    </section>
  </Panel>
</template>
<script>
import Panel from "../core/panel";
import Slider from "../core/slider";
export default {
  name: "Product",
  components: {
    Panel,
    Slider
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src: require("../../image/product0.jpg")
        },
        {
          href: "home",
          src: require("../../image/product1.jpg")
        },
        {
          href: "home",
          src: require("../../image/product2.jpg")
        },
        {
          href: "home",
          src: require("../../image/product1.jpg")
        },
        {
          href: "home",
          src: require("../../image/product0.jpg")
        },
        {
          href: "home",
          src: require("../../image/product2.jpg")
        }
      ],
      options: {
        slidesPerView: 2,
          spaceBetween: 50,
          // init: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
      }
    };
  }
};
</script>
<style  scoped>
 .content{
      box-sizing: border-box;
      padding: 0 24px;
       transform: translate3d(0px, 0, 0) !important;
   }
</style>
