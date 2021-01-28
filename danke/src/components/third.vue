<template>
  <div id="main">
    <div class="pic">
      <img src="../assets/img/weituo.jpg">
    </div>
    <div class="btn">
      <button class="btn1">电话咨询</button>
      <button class="btn2">在线委托</button>
    </div>
    <div class="weituo">
      <h4>甩手掌柜</h4>
      <img src="../assets/img/weituo1.jpg">
      <p>蛋壳专家打理,房屋升级改造,配置全新家具家电,省心省力,坐享收益</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #main{
    margin:10px 10px 80px 10px;
  }
  #main .pic img{
    width:100%;
  }
  #main .btn{
    display:flex;
    justify-content: space-around;
    margin-top:30px;
  }
  #main .btn .btn1,.btn2{
    outline: 0;
    border:0;
    font-size: 14px;
    padding:5px 20px;
    border-radius: 25px;
  }
  #main .btn .btn1{
    border:1px solid skyblue;
    background: #fff;
    color:skyblue;
  }
  #main .btn .btn2{
    background: skyblue;
    color:#fff;
  }
  #main .weituo img{
    width:100%;
  }
  #main .weituo p{
    margin:0;
    font-size: 14px;
    color:#666;
    text-indent: 20px;
  }
</style>
