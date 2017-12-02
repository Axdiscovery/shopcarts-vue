<template>
  <li class="item item-thumbnail-left">
    <img :src='pro.pic'/>
    <h3>{{pro.title}}</h3>
    <p>单价: {{pro.price}}</p>
    <p class="box">数量:
      <span @click='s(idx)'>-</span>
      <span><input type="number" v-model="pro.qal"></span>
      <span @click="a(idx)">+</span>
    </p>
    <span @click="del(idx)">删除</span>
  </li>
</template>

<script>
    export default {
      name: "shopcarts-detail",
      props:['pro','idx','a','s','del'],
      data(){
        return {
          id:''
        }
      },
    }
</script>

<style scoped>
  .box span{
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: gainsboro;
    font-weight: bold;
  }

  .box span input{

    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border:1px solid grey;
    font-weight: bold;
  }
</style>
