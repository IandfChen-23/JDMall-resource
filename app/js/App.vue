<template>
  <div id="app">
 <router-view />
  <NavBar/>
  </div>
</template>

<script>
import home from "./home/index";
import NavBar from "./public/navbar";
import router from "./router/index"
export default {
  name: "app",
  components:{
    NavBar
  }
};
</script>
<style>
  body{
    background-color: #eee;
  }
</style>

