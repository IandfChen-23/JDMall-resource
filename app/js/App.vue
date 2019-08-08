<template>
    <div id="app">
        <my-header/>
        <router-view />
        <my-footer/>
        <NavBar/>

    </div>
</template>

<script>

import NavBar from "./public/navbar"
import router from "./router/index"
import MyHeader from "./public/MyHeader"
import MyFooter from "./public/MyFooter"
export default {
    name: "App",
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

