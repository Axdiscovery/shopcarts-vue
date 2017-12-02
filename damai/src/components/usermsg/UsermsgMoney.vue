<template>
  <div class="u_money">
    <div class="u_m1"><span>0元</span><span>电子钱包</span></div>
    <div class="u_m2"><span>0张</span><span>优惠券</span></div>
    <div class="u_m3"><span>0分</span><span>积分</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  .u_money{
    display: flex;
    justify-content: space-around;
    font-size:14px;
    padding: 0.13rem 0;
    background: white;
  }
  .u_m1,.u_m2,.u_m3{
    flex:1;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
</style>
