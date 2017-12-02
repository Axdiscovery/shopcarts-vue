<template>
  <nav class="c_select">
    <select>
      <option value="西安">西安</option>
    </select>
    <select>
      <option value="推荐排序">推荐排序</option>
    </select>
    <select>
      <option value="全部时间">全部时间</option>
    </select>
  </nav>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  .c_select{
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    height:0.45rem;
    line-height: 0.45rem;
    border-bottom: 1px solid #f7f7f7;
    border-top: 1px solid #f7f7f7;
  }
  .c_select select{
    border: none;
    outline: none;
  }
</style>
