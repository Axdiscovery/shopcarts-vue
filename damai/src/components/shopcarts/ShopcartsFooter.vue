<template>
  <footer class="tabs tabs-dark tabs-icon-top" >
    <div class="tab-item">
      <i class="icon ion-ios-home"></i>
      首页
    </div>
    <div class="tab-item">
      <i class="icon ion-ios-home"></i>
      首页
    </div>
    <div class="tab-item">
      <i class="icon ion-ios-home"></i>
      首页
    </div>
    <div class="tab-item has-badge">
      <i class="badge badge-assertive" :tn="tn">{{tn}}</i>
      <i class="icon ion-ios-home"></i>
      购物车
    </div>
    <div class="tab-item">
      <i class="icon ion-ios-home"></i>
      首页
    </div>
  </footer>
</template>

<script>
    export default {
        name: "shopcartsfooter",
        props:['tn']
    }
</script>

<style scoped>

</style>
