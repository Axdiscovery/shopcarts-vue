<template>
  <header class="bar bar-header bar-assertive" @click="ttt">
    <span class="title">{{title}}</span>
  </header>
</template>

<script>
    export default {
        name: "shopcartsheader",
        props:['title','ttt']
    }
</script>

<style scoped>

</style>
