<template>
    <div class="sportpage">
        <common-header></common-header>
        <sport-search></sport-search>
        <sport-list></sport-list>
    </div>
</template>

<script type="text/ecmascript-6">
    import CommonHeader from '../components/commons/CommonHeader.vue';
    import SportSearch from '../components/sport/SportSearch.vue';
    import SportList from '../components/sport/SportList.vue'
    export default {
      components:{
        CommonHeader,
        SportSearch,
        SportList,
//        CommonFooter
      }
    }
</script>

<style scoped>
  .sportpage{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
