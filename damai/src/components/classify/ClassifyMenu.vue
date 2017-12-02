<template>
  <nav class="c_list">
    <span>全部</span>
    <span>演唱会</span>
    <span>话剧歌剧</span>
    <span>音乐会</span>
    <span>曲苑杂坛</span>
    <span>演唱会</span>
    <span>演唱会</span>
  </nav>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  /*nav*/
  .c_list{
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    overflow-x: auto;
  }
  .c_list span{
    display: flex;
    padding:0.15rem 0;
    margin:0 0.12rem;
    white-space:nowrap;
  }
  .red{
    border-bottom: 2px solid red;
    color:red;
  }
</style>
