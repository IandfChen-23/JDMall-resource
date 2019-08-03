<template>
  <section class="swiper">
    <swiper :options="options">
      <swiper-slide  v-for="item in items" :key="item.src">
        <router-link :to="{name:item.href}">
          <img :src="item.src" />
        </router-link>
      </swiper-slide >
      <div class="swiper-pagination" v-if="options.pagination"></div>
    </swiper>
  </section>
</template>
<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Slider",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
        notNextTick: true,
        autoplay: true,
        preloadImages: false,
        slidesPerView: "auto",
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 5,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        },
        spaceBetween: 30,
        observeParents: true,
        observer: true
        };
      }
    },
    items: {
      type: Array,
      default() {
        return [{ href: "", src: "" }];
      }
    }
  }
};
</script>
<style>
 .swiper{
     width: 100%;
 }
</style>