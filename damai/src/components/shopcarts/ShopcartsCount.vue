<template>
  <header class="bar bar-subheader bar-dark">
    <span class="title" :tm="tm" :tn="tn">商品数量：{{tn}} 总金额:{{tm}} </span>
  </header>
</template>

<script>
    export default {
        name: "shopcarts-count",
        props:['tm','tn']
    }
</script>

<style scoped>

</style>
