<template>
  <div id="app">
    <app-header></app-header>
      <router-view></router-view>
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
     let current = this.$route.name;
      if(current == 'Home')
      {
        console.log(this.$route.name);
      }else{

        console.log(this.$route.name);
      }

    }
  },
}
</script>

<style>

</style>
