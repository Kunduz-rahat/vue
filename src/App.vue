<template>
   <nav-bar></nav-bar>
  <div class="app">
   
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
}
a {
  text-decoration: none;
}
</style>
