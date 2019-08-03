<template>
  <div id="app">
  <home/>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import home from "./home/index";

export default {
  name: "app",
  components:{
    home
  }
};
</script>
<style>
  body{
    background-color: #eee;
  }
</style>

