<template>
  <article>
    <Slider :items="items" class="homeSlider" />
    <section class="list">
      <div class="item" v-for="item in enters" :key="item.img">
        <router-link :to="{name:item.href}">
          <img :src="item.img" alt="item.title" />
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>
<script>
import Slider from "../core/slider";
export default {
  name: "MySlider",
  components: {
    Slider
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src: require("../../image/slider0.jpg")
        },
        {
          href: "home",
          src: require("../../image/slider1.png")
        },
        {
          href: "home",
          src: require("../../image/slider0.jpg")
        }
      ],
      enters: [
        {
          href: "home",
          img: require("../../image/enter0.png"),
          title: "优惠券"
        },
        {
          href: "home",
          img: require("../../image/enter1.png"),
          title: "领福利"
        },
        {
          href: "home",
          img: require("../../image/enter2.png"),
          title: "抢钢镚"
        },
        {
          href: "home",
          img: require("../../image/enter3.png"),
          title: "众筹"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.homeSlider{
  margin-top: 100px;
}
@import "../../css/element.scss";
.list {
  @include list(row);
  background: #fff;
  padding-bottom: 20px;
  justify-content: space-around;
  .item {
      text-align: center;
      color:#666;
      margin-top: 12px;
    img{
        width: 90px;
        height: 90px;
    }
    h4 {
      text-decoration: none;
      font-size: 26px;
      margin-top: 12px;
      color:#666;
    }
  }
}
.swiper{
  img{
    width: 100%;
  }
}
</style>
