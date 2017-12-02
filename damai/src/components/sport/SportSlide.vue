<template>
  <div class="slide">
    <common-slide></common-slide>
  </div>
</template>

<script type="text/ecmascript-6">
    import CommonSlide from '../commons/CommonSlide.vue'
    export default {
      components:{
        CommonSlide
      },
      methods:{
        sliders:function () {
          var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            touchRatio : 0.5,
            autoplay:3000,
            autoHeight: true,
            speed:300
          })
        }
      },
      mounted:function(){
        this.sliders()
      }
    }
</script>

<style scoped>
  .slide{
    width:100%;
    height:1.25rem;
  }
</style>
