<template>
   <section class="swiper">
       <swiper :options='options'>
           <swiper-slider v-for="item in items" :key="item.href">
               <router-link :to="{name:item.href}">
                   <img :src="item.src" >
               </router-link>
           </swiper-slider>
            <div class="swiper-pagination"  v-if="options.pagination"></div>
       </swiper>
   </section>
</template>
<script>
import Vue from 'vue'
import {swiper,swiperSlider} from 'vue-awesome-swiper'


Vue.use(VueAwesomeSwiper, /* { default global options } */)
export default {
    components:{
        swiper,
        swiperSlider
    },
    props:{
        options:{
            type:Object,
            default(){
                return {
                   atuoplay:true,
                   loop:true,
                   pagination:{
                       el:'.swiper-pagination'
                   },
                   notNextTick:false
                }
            }
        },
        items:{
            type:Array,
            default(){
                return [{href:'',src:''}]
            }
        }
    }
}
</script>
<style>
@import '~swiper/dist/css/swiper.css'
</style>