<template>
    <div class="classify">
      <common-header></common-header>
      <classify-menu></classify-menu>
      <classify-select></classify-select>
      <classify-list :list="lists"></classify-list>
    </div>
</template>

<script type="text/ecmascript-6">
  import CommonHeader from '../components/commons/CommonHeader.vue';
  import ClassifyMenu from '../components/classify/ClassifyMenu.vue';
  import ClassifySelect from '../components/classify/ClassifySelect.vue';
  import ClassifyList from '../components/classify/ClassifyList.vue';
  import ClassifyApi from '../Api/ClassifyApi'
  export default {
    components:{
      CommonHeader,
      ClassifyMenu,
      ClassifySelect,
      ClassifyList
    },
    created:function(){
        this.initData()
    },
    methods:{
      initData:function(){
        ClassifyApi.getlist((data)=>{
          this.lists = data;
        })
      }
    },
    data(){
      return{
        lists:[]
      }
    }
  }
</script>

<style scoped>
  .classify{
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
