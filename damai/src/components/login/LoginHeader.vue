<template>
  <header>
    <img src="../../assets/img/l_p2.png" alt="" class="l-p2" @click="changepage()"/>
    <img src="../../assets/img/l_p1.png" alt="" class="l-p1"/>
  </header>
</template>

<script type="text/ecmascript-6">
    export default {
      methods:{
        changepage:function(){
          this.$router.push('/usermsg')
        }
      }
    }
</script>

<style scoped>
  /*header*/
  header{
    padding:0.5rem 0.25rem 0.18rem;
    position: relative;
  }
  .l-p1{
    margin:0 auto;
  }
  .l-p2{
    position: absolute;
    top:0.23rem;
    right:0.25rem;
  }
</style>
