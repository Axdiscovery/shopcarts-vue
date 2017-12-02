<template>
  <div class="u_img">
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
  .u_img{
    margin-top: 0.1rem;
    height:1.25rem;
  }
</style>
