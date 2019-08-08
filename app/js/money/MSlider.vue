<template>
    <article>

        <Slider :items="items" :options="options" class="MSlider"/>
    </article>
</template>
<script>
import Slider from "../core/slider"
export default {
    name: "MSlider",
    components: {
        Slider,
    },
    data() {
        return {
            options: {
                autoplay: true,
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                pagination: {
                    el: ".swiper-pagination",
                },
            },
            items: [
                {
                    href: "money",
                    src: require("../../image/mslider0.png"),
                },
                {
                    href: "money",
                    src: require("../../image/mslider1.png"),
                },
                {
                    href: "money",
                    src: require("../../image/slider0.jpg"),
                },
                {
                    href: "money",
                    src: require("../../image/slider1.png"),
                },
                {
                    href: "money",
                    src: require("../../image/slider2.jpg"),
                },
                {
                    href: "money",
                    src: require("../../image/slider0.jpg"),
                },
            ],
        }
  },
}
</script>
<style lang="scss" scoped>
.swiper{
  img{
    width: 100%;
  }
}
.MSlider{
    margin-top: 100px;
}
</style>
