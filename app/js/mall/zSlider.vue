<template>
  <div class="zhongchou">
      <img src="../../image/zslider.png" alt />
    <section class="content">
      
      <swiper :options="swiperOption">
        <swiper-slide><em>百万白条免费送，快来领取</em></swiper-slide>
        <swiper-slide><em>签到送流量，好礼免费拿</em></swiper-slide>
        <swiper-slide><em>下载福利，你想不到的优惠</em></swiper-slide>
      </swiper>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Panel from "../core/panel";
export default {
  name: "zSlider",
  components: {
    Panel
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        loop: true,
         slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          autoplay: true,
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.zhongchou {
  margin-top: 100px;
  padding-top: 12px;
  img {
    width: 30%;
  }
  .content{
      
      display: inline-block;
      height: 50px;
      overflow: hidden;
      line-height: 50px;
      font-size: 28px;
      padding-left: 10px;
      vertical-align: center;
  }
}
</style>

