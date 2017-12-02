<template>
  <section class="content scroll-content overflow-scroll has-header has-footer has-subheader">
    <ul class="list">
      <shopcarts-detail :del="del" :pro="n" :idx="idx" v-for='(n,idx) in list' :a="add" :s="sub"></shopcarts-detail>
    </ul>
  </section>
</template>

<script>
  import ShopcartsDetail from './ShopcartsDetail';
    export default {
        props:['list','add','sub','del'],
        name: "shopcarts-list",
        components:{
          ShopcartsDetail
        }
    }
</script>

<style scoped>

</style>
