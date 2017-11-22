<template>
  <header>
      <nav v-if="!isOldBrowser" class="navbar navbar-default active">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link to="/" tag="a" class="navbar-brand"  title="">
              <img src="../../static/images/essencial_logo.png" class="navbar-logo-img" style="margin-right: 10px" alt="">
               ESSENCIAL
            </router-link>
          </div>

          <div class="collapse navbar-collapse" id="navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <router-link to="/" tag="li" href="#"><a data-toggle="collapse" data-target=".navbar-collapse.in" href="#">Início</a></router-link>
              <router-link to="/servicos" tag="li" href="#"><a data-toggle="collapse" data-target=".navbar-collapse.in" href="#">Serviços</a></router-link>
              <li>
                <p class="hidden">
                  <a href="./components.html" class="btn btn-default navbar-btn" title="">Components</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav v-else class="navbar navbar-default active" >
        <div class="container" style="padding-top: 0%; padding-left: 0%; padding-right: 0%; padding-bottom: 40px">
          <div class="navbar-header" >
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link to="/" tag="a" class="navbar-brand"  title="">
              <img src="../../static/images/essencial_logo.png" class="navbar-logo-img" style="margin-right: 10px" alt="">
               ESSENCIAL
            </router-link>
          </div>

          <div class="collapse navbar-collapse" id="navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <router-link to="/" tag="li" href="#"><a data-toggle="collapse" data-target=".navbar-collapse.in" href="#">Início</a></router-link>
              <router-link to="/servicos" tag="li" href="#"><a data-toggle="collapse" data-target=".navbar-collapse.in" href="#">Serviços</a></router-link>
              <li>
                <p class="hidden">
                  <a href="./components.html" class="btn btn-default navbar-btn" title="">Components</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </header>
</template>

<script>
export default {
data () {
  return {
    isOldBrowser: false
  }
},
created () {

  document.addEventListener("DOMContentLoaded", function(){
     navbarFixedTopAnimation();
  });

  var ua = window.navigator.userAgent;
 var msie = ua.indexOf('MSIE ');
 if (msie > 0) {
   // IE 10 or older => return version number
   console.log("IE 10 or older")
   this.isOldBrowser = true;
   return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
 }

 var trident = ua.indexOf('Trident/');
 if (trident > 0) {
   // IE 11 => return version number
   console.log("IE 11")
   var rv = ua.indexOf('rv:');
   this.isOldBrowser = true;
   return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
 }

 var edge = ua.indexOf('Edge/');
 if (edge > 0) {
   // Edge (IE 12+) => return version number
   console.log("IE 12")
   this.isOldBrowser = false;
   return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
 }
 // other browser
 return false;
 },
}
</script>

<style>

</style>
