<template>
  <div id="main">
    <div class="login" id="input">
      <div class="top">
        <div class="tupian" v-show="isLogin">
          <img src="../assets/img/touxiang.png">
          <p>欢迎你! {{user}}</p>
        </div>
        <div class="denglv" v-show="!isLogin">
          <img src="../assets/img/man.png">
          <div>
            <router-link to="/login"><p>点击登录 <span class="vip">我的会员</span></p></router-link>
            <p><span>企优享 ></span><span>我的会员 ></span></p>
          </div>
        </div>
      </div>
      <div class="bottom">
          <div @click="goCollect">
            <img src="../assets/img/f-1.png">
            <p>收藏/关注</p>
          </div>
        <div>
          <img src="../assets/img/f-2.png">
          <p>预约看房</p>
        </div>
        <div>
          <img src="../assets/img/f-3.png">
          <p>预定记录</p>
        </div>
        <div>
          <img src="../assets/img/f-4.png">
          <p>优惠券</p>
        </div>
        <div>
          <img src="../assets/img/f-5.png">
          <p>钱包</p>
        </div>
      </div>
      <h4>常用工具</h4>
      <div class="bottom">
        <div>
          <img src="../assets/img/01.png">
          <p>租房合同</p>
        </div>
        <div>
          <img src="../assets/img/02.png">
          <p>房租账单</p>
        </div>
        <div>
          <img src="../assets/img/03.png">
          <p>智能门锁</p>
        </div>
        <div>
          <img src="../assets/img/04.png">
          <p>在线报修</p>
        </div>
        <div>
          <img src="../assets/img/05.png">
          <p>我的管家</p>
        </div>
      </div>
      <h4>蛋壳租约</h4>
      <div class="bottom">
        <div>
          <img src="../assets/img/04.png">
          <p>品质搬家</p>
        </div>
        <div>
          <img src="../assets/img/03.png">
          <p>保洁预约</p>
        </div>
        <div>
          <img src="../assets/img/02.png">
          <p>在线维修</p>
        </div>
        <div>
          <img src="../assets/img/01.png">
          <p>服务订单</p>
        </div>
      </div>
      <h4>蛋壳服务</h4>
      <div class="bottom">
        <div>
          <img src="../assets/img/01.png">
          <p>我的管家</p>
        </div>
        <div>
          <img src="../assets/img/02.png">
          <p>租客反馈</p>
        </div>
        <div>
          <img src="../assets/img/03.png">
          <p>服务中心</p>
        </div>
        <div>
          <img src="../assets/img/04.png">
          <p>入住指南</p>
        </div>
      </div>
      <h4>更多工具</h4>
      <div class="bottom">
        <div>
          <img src="../assets/img/04.png">
          <p>租房合同</p>
        </div>
        <div>
          <img src="../assets/img/03.png">
          <p>租约变更</p>
        </div>
        <div>
          <img src="../assets/img/02.png">
          <p>房屋账单</p>
        </div>
        <div>
          <img src="../assets/img/01.png">
          <p>智能门锁</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isLogin:false,
      user:''
    }
  },
  mounted(){
    var login=sessionStorage.getItem("Flag")
    var user=sessionStorage.getItem("user")
    this.user=user
    if(login){
      this.isLogin=true
    }
  },
  methods:{
    goCollect(){
      var login=sessionStorage.getItem("Flag")
      if(login){
        this.$router.push("/collect")
      }else{
        this.$dialog.alert({
          title:'提示',
          message: '您还未登录,请先登录'
        }).then(res=>{
          this.$router.push("/login")
        });
      }
    }
  }
}
</script>


<style scoped>
a{
  color:#000;
}
#main .tupian p{
  margin:0;
  font-size: 18px;
  font-weight:bold;
  border-radius: 30px;
  color:#fff;
}
#main .tupian{
  border-radius: 5px;
  padding:10px;
  text-align: center;
  background: url(../assets/img/background.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#main .login .bottom p{
  margin:0;
  font-size: 12px;
}
#main .login .bottom img{
  width:30px;
}
#main .login .bottom div{
  text-align: center;
}
#main .login .bottom{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
}
#main .login .top .denglv div{
  margin-left:10px;
}
#main .login .top .denglv span{
  background: skyblue;
  font-size: 12px;
  color:#fff;
  padding: 0 15px;
  border-radius: 10px;
  margin-left:5px;
}
#main .login .top .denglv p{
  margin:0;
  font-size: 14px;
  text-align: center;
}
#main .login .top .denglv{
   display: flex;
   align-items: center;
   margin-bottom: 15px;
   margin-left:20px;
}
#main .login .top .tupian{
  margin-bottom: 15px;
}
#main {
  margin: 10px 10px 80px 10px;
}
</style>
