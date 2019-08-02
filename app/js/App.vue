<template>
  <div id="app">
    <MyHeader/>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import MyHeader from "./public/MyHeader";
export default {
  name: "app",
  components:{
    MyHeader
  }
};
</script>
