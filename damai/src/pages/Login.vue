<template>
    <div>
      <login-header></login-header>
      <login-msg></login-msg>
      <login-footer></login-footer>
    </div>
</template>

<script type="text/ecmascript-6">
  import LoginHeader from '../components/login/LoginHeader.vue';
  import LoginMsg from '../components/login/LoginMsg.vue';
  import LoginFooter from '../components/login/LoginFooter.vue';
    export default {
      components:{
        LoginHeader,
        LoginMsg,
        LoginFooter
      }
    }
</script>

<style scoped>

</style>
