<template>
    <div>
      <usermsg-money></usermsg-money>
      <usermsg-my></usermsg-my>
      <usermsg-tools></usermsg-tools>
      <usermsg-slide></usermsg-slide>
    </div>
</template>

<script type="text/ecmascript-6">
  import UsermsgMoney from './UsermsgMoney.vue';
  import UsermsgMy from './UsermsgMy.vue';
  import UsermsgTools from './UsermsgTools.vue';
  import UsermsgSlide from './UsermsgSlide.vue';
    export default {
      components:{
        UsermsgMoney,
        UsermsgMy,
        UsermsgTools,
        UsermsgSlide
      }
    }
</script>

<style scoped>
  div{
    flex: 1;
    overflow:hidden;
    overflow-y: auto;
  }
</style>
