<template>
    <section>
      <div id="mescroll" class="mescroll">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <classify-detail :pro=n  v-for="n in list"></classify-detail>
        </div>
        <div class="swiper-slide">
          <classify-detail :pro=n v-for="n in list"></classify-detail>
        </div>
        <div class="swiper-slide">
          <classify-detail :pro=n v-for="n in list"></classify-detail>
        </div>
        <div class="swiper-slide">
          <classify-detail :pro=n v-for="n in list"></classify-detail>
        </div>
        <div class="swiper-slide">
          <classify-detail :pro=n v-for="n in list"></classify-detail>
        </div>
        <div class="swiper-slide">
          <classify-detail :pro=n v-for="n in list"></classify-detail>
        </div>
        <div class="swiper-slide">
          <classify-detail :pro=n  v-for="n in list"></classify-detail>
        </div>
      </div>
    </div>
      </div>
    </section>

</template>

<script type="text/ecmascript-6">
  import ClassifyDetail from './ClassifyDetail.vue'
    export default {
      components:{
        ClassifyDetail
      },
      props:['list'],
      methods:{
        sliders:function(){
          let mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            autoHeight: true,
            touchRatio : 0.5,
            onSlideChangeStart: function(swiper){
              $('.c_list span').eq(swiper.activeIndex).addClass("red")
                .siblings().removeClass('red');
            }
          });
          $('.c_list span').click(function(){
            $(this).addClass('red').siblings().removeClass('red');
            let n=$(this).index();
            mySwiper.slideTo(n+1, 1000, false);
          })
        }
      },
      mounted:function(){
        this.sliders()
      }
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow:hidden;
    overflow-y: auto;
  }
</style>
