<template>
  <div id="app">
  <my-header/>
 <router-view />
  <NavBar/>
  </div>
</template>

<script>

import NavBar from "./public/navbar";
import router from "./router/index"
import MyHeader from './public/MyHeader'
export default {
  name: "app",
  components:{
    NavBar,
    MyHeader
  }
};
</script>
<style>
  body{
    background-color: #eee;
  }
</style>

