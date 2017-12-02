<template>
  <div class="s_basketball">
    <div class="s_b1">
      <div class="s_b1l"><span>篮球</span> <img src="../../assets/img/s_p5.png" alt=""></div>
      <div class="s_b1r"><span>更多</span> <img src="../../assets/img/s_p6.png" alt=""></div>
    </div>
    <div class="s_b2">
      <sport-ball-detail></sport-ball-detail>
      <sport-ball-detail></sport-ball-detail>
      <sport-ball-detail></sport-ball-detail>
      <sport-ball-detail></sport-ball-detail>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SportBallDetail from './SportBallDetail.vue';
    export default {
      components:{
        SportBallDetail
      }
    }
</script>

<style scoped>
  .s_basketball{
    padding: 0.1rem;
    margin-bottom: 0.1rem;
    background: white;
  }
  .s_b1{
    display: flex;
    justify-content: space-between;
  }
  .s_b1l{
    font-size: 12px;
    font-weight:bold;
    display: flex;
  }

  .s_b1r{
    display: flex;
    font-size: 10px;
    color:#d9d9d9;
  }
  .s_b2{
    margin-top: 0.1rem;
    display: flex;
    overflow: hidden;
    overflow-x: auto;
  }
</style>
