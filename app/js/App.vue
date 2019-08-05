<template>
  <div id="app">
  <home/>
  <NavBar/>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import home from "./home/index";
import NavBar from "./public/navbar";
export default {
  name: "app",
  components:{
    home,
    NavBar
  }
};
</script>
<style>
  body{
    background-color: #eee;
  }
</style>

