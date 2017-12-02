<template>
  <div class="c_detail">
    <img  v-lazy="pro.photo" alt="">
    <div class="c_msg">
      <div class="c_cont">
        <p class="c_d">{{pro.title}}</p>
        <p class="c_p1">{{pro.time}}</p>
        <input type="button" value="选座"/>
        <p class="c_price">{{pro.price}}</p>
      </div>
      <p class="c_p2">{{pro.name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:['pro']
    }
</script>

<style scoped>
  .c_detail{
    padding:0.15rem 0 0 0.12rem;
    display: flex;
  }
  .c_detail img{
    width:0.69rem;
    height:0.94rem;
  }
/*____________________________________________________*/
  img[lazy=loaded]{
    animation:fade 0.5s;
  }
  @keyframes fade {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  /*______________________________________*/
  .c_msg{
    margin-left: 0.1rem;
  }
  .c_cont{
    padding-right: 0.2rem;
  }
  .c_msg .c_d{
    font-weight: bold;
    font-size: 14px;
    line-height: 0.25rem;
  }
  .c_msg h3{
    font-size: 12px;
    line-height: 0.24rem;
  }
  .c_msg input{
    display: block;
    width:0.5rem;
    height:0.24rem;
    text-align: center;
    line-height: 0.24rem;
    border-radius: 0.08rem;
    font-size: 10px;
    margin-top: 0.1rem;
    background: white;
    border:1px solid #ccc;
  }
  .c_msg .c_price{
    font-size: 14px;
    color:#f54887;
    font-weight: bold;
    line-height: 0.36rem;
  }
  .c_p1,.c_p2{
    font-size: 10px;
  }
  .c_p2{
    border-bottom: 1px solid #f7f7f7;
    border-top: 1px solid #f7f7f7;
    line-height: 0.4rem;
  }
</style>
