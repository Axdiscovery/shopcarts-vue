<template>
    <div class="usermsg">
      <usermsg-header></usermsg-header>
      <usermsg-list></usermsg-list>
      <common-footer></common-footer>
    </div>
</template>

<script type="text/ecmascript-6">
  import UsermsgHeader from '../components/usermsg/UsermsgHeader.vue';
  import UsermsgList from '../components/usermsg/UsermsgList.vue';
  import CommonFooter from '../components/commons/CommonFooter.vue';
    export default {
      components:{
        UsermsgHeader,
        UsermsgList,
        CommonFooter
      }
    }
</script>

<style scoped>
  .usermsg{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
