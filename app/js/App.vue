<template>
    <div id="app">
        <my-header/>
        <router-view />
        <my-footer/>
        <NavBar/>

    </div>
</template>

<script>
import Vue from 'vue'
import NavBar from "./public/navbar"
import router from "./router/index"
import MyHeader from "./public/MyHeader"
import MyFooter from "./public/MyFooter"
import Vuex from 'vuex'
import store from './store/index.js'
Vue.use(Vuex)
export default {
    name: "App",
    store,
    components: {
        NavBar,
        MyHeader,
        MyFooter,
    },
}
</script>
<style lang='scss'>
@import "../css/element.scss";
@import "../css/reset.scss";
  body{
     @include panel;
    background-color: #eee;

  }
</style>

