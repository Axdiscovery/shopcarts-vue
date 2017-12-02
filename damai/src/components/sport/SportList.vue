<template>
    <section>
      <sport-slide></sport-slide>
      <sport-hot></sport-hot>
      <sport-ball></sport-ball>
      <sport-hot></sport-hot>
    </section>
</template>

<script type="text/ecmascript-6">
    import SportSlide from './SportSlide.vue';
    import SportHot from './SportHot.vue';
    import SportBall from './SportBall.vue';
    export default {
      components:{
        SportSlide,
        SportHot,
        SportBall
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
