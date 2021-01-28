<template>
  <div id="main">
    <div class="top">
      <img src="../assets/img/reg.jpg">
      <span @click="back">&times;</span>
      <p>让租房变得 简单和快乐</p>
    </div>
    <div class="bottom">
      <div class="phone">
        <input  @focus="showTips1" type="text" placeholder="请输入手机号" v-model="phonenum">
        <p v-show="show1" :class="classObj">{{tips1}}</p>
      </div>
      <div class="pwd">
        <input @focus="showTips2"  type="password" placeholder="请输入密码" v-model="password">
        <p v-show="show2" :class="classObj1">{{tips2}}</p>
      </div>
      <button @click="register">注册</button>
    </div>
    <p @click="goLogin">已注册,去登录页</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tips1:"请输11位手机号",
      tips2:"至少8-16个字符，1个大写字母，1个小写字母和1个数字",
      show1:false,
      show2:false,
      phonenum:'',
      password:'',
      classObj:{
        right:false,
        wrong:true,
      },
      classObj1:{
        right1:false,
        wrong1:true,
      },
    }
  },
  methods:{
    back(){
      this.$router.push("/index/fourth")
    },
    showTips1(){
      this.show1=true;
    },
    showTips2(){
      this.show2=true;
    },
    register(){
      var reg=/^1[3456789]\d{9}$/
      var reg1= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
      if(this.phonenum=="" || this.password==""){
        this.$toast("手机号或密码不能为空")
      }else if(reg.test(this.phonenum) && reg1.test(this.password) ){
        this.axios.post("/user/reg",`phone=${this.phonenum}&upwd=${this.password}`).then(res=>{
          if(res.data==1){
            this.$toast("注册成功")
            this.$router.push("/login")
          }else{
            this.$toast("注册失败")
          }
        })
      }else{
        this.$toast("格式不正确")
      }
    },
    goLogin(){
      this.$router.push("/login")
    }
  },
  watch:{
    phonenum(){
      var reg=/^1[3456789]\d{9}$/
      if(reg.test(this.phonenum)){
        this.tips1="手机号格式正确"
        this.classObj.right=true;
        this.classObj.wrong=false;
      }else{
        this.tips1="手机号格式错误"
        this.classObj.right=false;
        this.classObj.wrong=true;
      }
    },
    password(){
      var reg= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
      if(reg.test(this.password)){
        this.tips2="密码格式正确"
        this.classObj1.right1=true;
        this.classObj1.wrong1=false;
      }else{
        this.tips2="密码格式错误"
        this.classObj1.right1=false;
        this.classObj1.wrong1=true;
      }
    }
  }
};
</script>

<style scoped>
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

