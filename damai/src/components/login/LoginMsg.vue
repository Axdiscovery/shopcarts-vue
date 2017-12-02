<template>
  <section>
    <div class="l_phone"><select><option>+86</option></select><input type="text" placeholder="请输入手机号" class="tel" @blur="checkphone()"></div>
    <div class="l_pass"><input type="text" placeholder="请输入验证码" class="l_iptram"><input type="button" value="验证" class="l_rad" @click="getNum()"></div>
    <div id="v_container"></div>
    <input type="button" value="登录" class="l_btn" @click="login()">
    <p class="l_list"><a>新注册用户</a><a>手机号快捷登录</a><a href="">忘记密码</a></p>
  </section>
</template>

<script type="text/ecmascript-6">

    export default {
      data(){
        return {
          verifyCode:'',
          phone:'',
          msg:0,
          tel:0
        }
      },
      mounted:function(){
        this.show()
      },
      methods:{
        show:function(){
          this.verifyCode = new GVerify("v_container");
        },
        getNum:function(){
            let res = (this.verifyCode).validate($('.l_iptram').val());
            if(res){
              alert("验证正确");
              this.msg=1;
            }else{
              alert("验证码错误");
            }
        },
        checkphone:function(){
          this.phone = $('.tel').val();
          if(!(/^1[34578]\d{9}$/.test(this.phone))){
            alert("手机号码有误，请重填");
            return false;
          }else{
            this.tel=1;
          }
        },
        thens:function(){
          this.$router.push('/Usermsg');
        },
        login:function(){
              if(this.tel==1&&this.msg==1){
              localStorage.setItem("key", this.phone);
              this.$http.post('http://localhost:3000/api/UserData',{
                userphone:this.phone
              },{emulateJSON : true},{'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
              }}).then(this.thens())
              }else{
                alert('你别乱来')
              }
            }
        }

    }
</script>

<style scoped>
  /*section*/
  section{
    padding:0 0.25rem;
    margin-top: 0.5rem;
  }
  section select,section input{
    border: none;
    outline: none;
    color: black;
  }

  .l_phone,.l_pass{
    border-bottom:1px solid #f1f1f1;
    margin: 0.1rem 0;
    height:0.5rem;
    display: flex;
  }
  #v_container{
    width:100%;
    height:0.5rem;
  }
  section input{
    flex:1;
  }
  section select{
    width:0.58rem;
    border-right:1px solid #f1f1f1;
  }
  .l_phone input {
    margin-left: 0.17rem;
  }
  .l_rad {
    width:0.5rem;
    height: 0.4rem;
    color:#ffffff;
    background: #ffa4c9;
    font-size: 16px;
    font-weight: bold;
    margin-left: 0.5rem;
    border-radius:0.1rem;
  }
  .l_btn{
    height:0.45rem;
    width:100%;
    margin:0.22rem 0;
    border-radius:0.1rem;
    background: #ffa4c9;
    color:white;
  }
  .l_list{
    font-size: 9px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color:#b6b6b6;
  }
</style>
