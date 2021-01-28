<template>
  <div id="main">
    <div class="header">
      <van-dropdown-menu class="city">
        <van-dropdown-item v-model="value" :options="option" />
      </van-dropdown-menu>
      <div class="search">
        <img src="../assets/img/search.png">
        <input type="text" placeholder="蛋壳半价月 万房五折">
      </div>
      <img src="../assets/img/message.png">
    </div>
    <div class="lunbo">
      <van-swipe :autoplay="5000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/img/lb-1.jpg">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/img/lb-2.jpg">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="pinzhi">
      <div>
        <img src="../assets/img/true.png">
        <span>100%房源房价</span>
      </div>
      <div>
        <img src="../assets/img/fast.png">
        <span>优质保洁/极速维修</span>
      </div>
      <div>
        <img src="../assets/img/pinzhi.png">
        <span>品质房屋/放心呼吸</span>
      </div>
    </div>
    <div class="type">
      <div>
        <img src="../assets/img/1-1.jpg">
        <p>合租</p>
      </div>
      <div>
        <img src="../assets/img/1-2.jpg">
        <p>整租</p>
      </div>
      <div>
        <img src="../assets/img/1-3.jpg">
        <p>月租</p>
      </div>
      <div>
        <img src="../assets/img/1-4.jpg">
        <p>地图找房</p>
      </div>
    </div>
    <div class="tuijian">
      <div class="left">
        <img src="../assets/img/2-1.jpg">
      </div>
      <div class="right">
        <div><img src="../assets/img/2-2.jpg"></div>
        <div><img src="../assets/img/2-3.jpg"></div>
      </div>
    </div>
    <div class="tehui">
      <h4>特惠房源</h4>
      <div class="banner">
        <div class="product">
          <div v-for="(item,i) of tehui" :key=i>
            <router-link :to="{path:'/detail',query:{hid:item.hid}}">
              <img :src="item.pic1">
              <p>{{item.title}}</p>
              <p class="price"><span>￥{{item.price}}</span><span>/首月 <del>{{item.count}}</del></span></p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="serve">
      <div>
        <img src="../assets/img/wifi.png">
        <p class="title">极速wifi</p>
      </div>
      <div>
        <img src="../assets/img/clear.png">
        <p class="title">优质保洁</p>
      </div>
      <div>
        <img src="../assets/img/repair.png">
        <p class="title">专业维修</p>
      </div>
      <div>
        <img src="../assets/img/people.png">
        <p class="title">私人管家</p>
      </div>
    </div>
    <router-link to="/index/second">
      <div class="more">
        <div>更多品质房源</div>
      </div>
    </router-link>
    <div class="recommend">
      <h4>为你推荐</h4>
      <ul>
          <li v-for="(item,i) of arr" :key="i">
            <router-link :to="{path:'/detail',query:{hid:item.hid}}">
            <div class="content">
              <div class="one">
                  <img :src="item.pic1">
              </div>
              <div class="two">
                <p class="tit">{{item.title}}</p>
                <p class="detail">{{item.way}} | {{item.size}} · {{item.floor}}</p>
                <p class="detail">距您7.8km</p>
                <p class="money"><span>￥{{item.price}}</span>/月</p>
              </div>
            </div>
            </router-link>
          </li>
      </ul>
    </div>
    <router-link to="/index/second">
      <div class="more">
        <div>更多品质房源</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr:[],
      tehui:[],
      value: 0,
      option: [
        { text: "武汉", value: 0 },
        { text: "北京", value: 1 },
        { text: "上海", value: 2 }
      ]
    };
  },
  methods: {
  
  },
  mounted(){
    this.axios.get("/index").then(res=>{
       this.arr=res.data.slice(0,5);
       this.tehui=res.data.slice(0,6);
    })
  }
};
</script>

<style scoped>
a{color:#000;}
#main .recommend .one {
  width: 40%;
}
#main .recommend .two {
  width: 50%;
}
#main .recommend ul li p.money {
  color: #666;
  font-size: 14px;
}
#main .recommend ul li p.money span {
  color: #f00;
}
#main .recommend ul li p.detail {
  font-size: 12px;
  color: #666;
}
#main .recommend ul li p.tit {
  font-weight: bold;
  font-size: 14px;
}
#main .recommend ul li p {
  margin: 5px 0;
}
#main .recommend ul li .content {
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
}
#main .recommend img {
  width: 90%;
  border-radius: 5px;
}
#main .more div {
  text-align: center;
  font-size: 15px;
  background: #ccc;
  padding: 10px 0;
  border-radius: 5px;
  margin: 10px 0;
}
#main .serve div {
  text-align: center;
}
#main .serve .title {
  font-size: 12px;
  text-align: center;
}
#main .serve img {
  width: 30px;
  border-radius: 50%;
  border: 1px solid #666;
}
#main .serve {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}
#main {
  margin: 0 10px 80px 10px;
}
#main .header .city {
  width: 50px;
  height: 32px;
}
#main .header img {
  width: 23px;
  height: 23px;
}
#main .header {
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  position: fixed;
  z-index: 10;
  background: #fff;
}
#main .header .search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #ddd;
  width: 60%;
  border-radius: 15px 15px;
}
#main .header .search img {
  width: 14px;
  height: 14px;
}
#main .header .search input {
  border: 0;
  outline: 0;
  font-size: 12px;
  padding-left: 5px;
  width: 90%;
}
#main .lunbo::before {
  content: "";
  display: table;
}
#main .lunbo {
  width: 100%;
}
.van-swipe {
  margin-top: 54px;
}
#main .lunbo img {
  width: 100%;
  height: 36%;
}
#main .pinzhi,
#main .type {
  display: flex;
  justify-content: space-between;
}
#main .pinzhi div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: scale(0.9);
}
#main .pinzhi div span {
  font-size: 12px;
  color: #999;
}
#main .type {
  margin: 20px 0;
}
#main .type div {
  text-align: center;
}
#main .type img {
  width: 50%;
}
#main .type p {
  font-size: 12px;
  margin: 0;
  text-align: center;
}
#main .tuijian {
  display: flex;
}
#main .tuijian .left,
#main .tuijian .right {
  width: 50%;
  text-align: center;
}
#main .tuijian .left img,
#main .tuijian .right img {
  width: 100%;
  border-radius: 3px;
}
#main .banner{
  overflow: auto;
}
#main .banner::-webkit-scrollbar { width: 0 !important }
#main .banner .product{
  display: flex;
}
#main .banner .product>div{
  width:165px;
  margin-right:10px;
}
#main .banner .product>div img{
  width:165px;
  border-radius:5px;
}
#main .banner .product>div p {
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 12px;
}
#main .banner .product>div p > span:first-child {
  color: #f00;
}
#main .banner .product>div p > span:not(:first-child) {
  color: #999;
}
</style>