<template>
  <div id="main">
    <div class="top">
      <img src="../assets/img/login.jpg">
      <span @click="back">&times;</span>
      <p>让租房变得 简单和快乐</p>
    </div>
    <div class="bottom">
      <div class="phone">
        <input type="text" placeholder="请输入手机号" v-model="phone" >
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" v-model="upwd" >
      </div>
      <button @click="login">登录</button>
    </div>
    <div class="weixin">
        <p>微信登录</p>
        <img src="../assets/img/weixin.png">
        <p>登录即代表你同意 《用户使用条款》 《隐私保护政策》</p>
        <p @click="goReg">立即注册</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        phone:'',
        upwd:'',
    }
  },
  methods:{
    back(){
      this.$router.push("/index/fourth")
      //console.log(sessionStorage.getItem("Flag"))
    },
    login(){
        if(this.phone=="" || this.upwd==""){
            this.$toast("手机号或密码不能为空")
        }else{
            this.axios.post("/user/login",`phone=${this.phone}&upwd=${this.upwd}`).then(res=>{
                if(res.data.code==1){
                    this.$toast("登录成功")
                    //console.log(res.data.msg[0].phone)
                    sessionStorage.setItem("Flag",true)
                    sessionStorage.setItem("user",res.data.msg[0].phone)
                    sessionStorage.setItem("uid",res.data.msg[0].uid)
                    this.$router.push({path:"/index"})
                }else{
                    this.$toast("登录失败")
                }
            })
        }
    },
    goReg(){
        this.$router.push("/reg")
    }
  },
    
};
</script>

<style scoped>
#main .weixin{
    text-align: center;
    margin-top:15px;
}
#main .weixin p{
    margin:0;
    margin: 15px 0;
    font-size: 12px;
    color:#666;
}
#main>p{
  margin:0;
  font-size: 14px;
  margin-top:20px;
  margin-left:37px;
  color:#666;
}
.right,.right1{
  color:lightgreen;
}
.wrong,.wrong1{
  color:#f00;
}
#main .bottom{
  text-align: center;
  margin-top:20px;
}
#main .bottom p{
  font-size: 12px;
  margin: 0;
  text-align: left;
  margin-left:37px;
}
#main .bottom button{
  border:0;
  outline: 0;
  font-size: 14px;
  margin-top:20px;
  width:85%;
  color:#666;
  padding:5px 10px;
  border-radius: 15px;
}
#main .bottom input{
  border:0;
  outline:0;
  border-bottom:1px solid #ddd;
  font-size: 14px;
  padding:10px;
  width:80%;
  margin:10px 0;
}
#main {
  margin: 10px;
}
#main .top {
  position: relative;
}
#main .top img {
  width: 100%;
}
#main .top p {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}
#main .top span {
  font-size: 30px;
  position: absolute;
  top: 3%;
  left: 3%;
  color: #fff;
}
</style>

