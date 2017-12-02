<template>
  <header>
    <p class="u_fix"><a href="">设置</a><img src="../../assets/img/u_p1.png" alt="" ></p>
    <div class="u_head"><img src="../../assets/img/u_p2.png" alt="" @click='loginpage()'><a href="" class="loginA">登录/注册</a></div>
  </header>
</template>

<script type="text/ecmascript-6">
    export default {
      data(){
        return {
          phoneNum:''
        }
      },
      mounted:function(){
      
        this.getNum()
      },
      methods:{
        loginpage:function(){
          this.$router.push("/login");
        },
        getNum:function(){
          this.phoneNum=localStorage.getItem("key");
          $('.loginA').html(this.phoneNum);
        }
      }
    }
</script>

<style scoped>
  /*header*/
  header{
    background: #ff1a77;
    padding: 0.12rem;
    color: white;
    height:1.5rem;
  }
  .u_fix{
    display: flex;
    justify-content: space-between;
  }
  .u_fix a{
    font-size: 16px;

  }
  .u_head{
    margin-top: 0.35rem;
    display: flex;
  }
  .u_head a{
    font-size: 16px;
    display: block;
    margin-top:0.27rem;
    margin-left: 0.15rem;
  }
</style>
