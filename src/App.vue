<template>
  <div id="app">
    <app-header></app-header>
      <transition name="" mode="out-in">
        <router-view></router-view>
      </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'app',

  methods: {

  },
  created () {
  document.addEventListener("DOMContentLoaded", function(){
      navbarFixedTopAnimation();
  });
  //document.addEventListener("DOMContentLoaded", function (event) {
  //   navActivePage();
  //   scrollRevelation('.reveal');
  //});
 },
  watch: {
    '$route': function(value) {
     let current = this.$route.hash;
      if(current == 'Home')
      {
        console.log(this.$route.hash);
      }else{

        console.log(this.$route.hash);
      }
    }
  },
}
</script>

<style scoped>
</style>
