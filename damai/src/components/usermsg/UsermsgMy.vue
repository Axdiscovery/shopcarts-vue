<template>
  <div class="u_my">
    <div><img src="../../assets/img/u_p3.png" alt=""><span>我的票</span></div>
    <div><img src="../../assets/img/u_p3.png" alt=""><span>我的票</span></div>
    <div><img src="../../assets/img/u_p3.png" alt=""><span>我的票</span></div>
    <div><img src="../../assets/img/u_p3.png" alt=""><span>我的票</span ></div>
    <div><img src="../../assets/img/u_p3.png" alt=""><span>我的票</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  .u_my{
    display: flex;
    justify-content: space-around;
    font-size:14px;
    background: white;
    padding: 0.13rem 0;
    margin-top: 0.1rem;
  }
  .u_my div{
    flex:1;
    text-align: center;
  }
  .u_my img{
    margin:0 auto 0.15rem;
  }
  .u_my div:first-child{
    border-right:1px solid #e9e9e9;
  }
</style>
