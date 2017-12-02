<template>
  <div class="u_tool">
    <p>必要工具</p>
    <div class="u_t1">
      <div><img src="../../assets/img/u_p4.png" alt=""><span>地址管理</span></div>
      <div><img src="../../assets/img/u_p4.png" alt=""><span>地址管理</span></div>
      <div><img src="../../assets/img/u_p4.png" alt=""><span>地址管理</span></div>
    </div>
    <div class="u_t2">
      <div><img src="../../assets/img/u_p4.png" alt=""><span>地址管理</span></div>
      <div><img src="../../assets/img/u_p4.png" alt=""><span>地址管理</span></div>
      <div></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  .u_tool{
    font-size: 14px;
    background: white;
    margin-top: 0.1rem;
  }
  .u_tool p{
    line-height: 0.55rem;
    margin-left: 0.13rem;
    font-weight: bold;
  }
  .u_t1,.u_t2{
    display: flex;
    justify-content: space-around;
    border-top:1px solid #f1f1f1;
    border-bottom:1px solid #f1f1f1;
    padding: 0.15rem 0;
    text-align: center;
  }
  .u_t1 div,.u_t2 div{
    flex:1;
  }
  .u_t1 img,.u_t2 img{
    margin:0 auto 0.13rem;
  }
  .u_t2{
    border:none;
  }
</style>
