<template>
  <footer>
    <div class="l_q">
      <span class="l_left"></span><span class="l_mid">其他登录</span><span class="l_right"></span>
    </div>
    <div class='l_share'>
      <img src="../../assets/img/l_p4.png" alt="">
      <img src="../../assets/img/l_p4.png" alt="">
      <img src="../../assets/img/l_p4.png" alt="">
      <img src="../../assets/img/l_p4.png" alt="">
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  /*footer*/
  footer{
    padding:0 0.25rem;
    margin-top: 1.2rem;
  }
  .l_q{
    display: flex;
    padding: 0 0.3rem;
    justify-content: space-between;
    align-items: center;
  }
  .l_left,.l_right{
    width:0.95rem;
    border-bottom: 1px solid #b6b6b6;
  }
  .l_mid{
    font-size: 10px;
    float: left;
  }
  .l_share{
    display: flex;
    justify-content: space-around;
    margin:0.21rem 0;
  }
</style>
