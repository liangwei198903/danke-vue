<template>
  <div id="main">
    <div class="header">
      <div class="all">
        <div class="search" id="input">
          <img src="../assets/img/search.png">
          <input type="text" placeholder="蛋壳半价月 万房五折">
        </div>
        <img src="../assets/img/position.png">
      </div>
      <div class="xiala">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
      </div>
      <div class="slide">
        <ul>
          <li v-for="(item,i) of area" :key=i :class="{gaoliang:gaoliang==i}" @click="changeStyle(i)">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="recommend">
      <ul class="ul1">
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
  </div>
</template>

<script>
export default {
  data(){
    return{
      area:["关谷广场","街道口","江汉路","中南路","杨家湾","南"],
      gaoliang:0,
      arr:[],
      value1:0,
      value2:"a",
      option1: [
        { text: '整租', value: 0 },
        { text: '合租', value: 1 }
      ],
      option2: [
        { text: '价格升序', value: 'a' },
        { text: '价格降序', value: 'b' }
      ]
    }
  },
  methods:{
    changeStyle(i){
      this.gaoliang=i
    }
  },
  created(){
    this.axios.get("/index").then((res)=>{
      this.arr=res.data;
    })
  },
  watch:{
    value2(){
      if(this.value2=='b'){
        this.arr.reverse();
      }else if(this.value2=='a'){
        this.arr.reverse();
      }
    }
  }
}
</script>


<style scoped>
a{
  color:#000;
}
.van-dropdown-menu{
  height:20px;
}
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
#main .recommend>ul.ul1{
  margin-top:112px;
}
#main .recommend img {
  width: 90%;
  border-radius: 5px;
}
#main .header{
  position:fixed;
  background:#fff;
  width:95%;
  top:0;
}
#main .header .slide ul li+li{
  margin-left: 10px;
}
#main .header .slide ul li{
  font-size: 12px;
  padding:3px 8px;
  border-radius: 5px;
}
.gaoliang{
  background:skyblue;
  color:#fff;
}
#main .header .slide ul{
  display: flex;
  justify-content: space-between;
  margin:10px 0;
}
#main {
  margin: 0px 10px 80px 10px;
}
.van-dropdown-menu__title{
  font-size: 13px!important;
}
#main .header .all{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
#main .header .search {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #ddd;
  width: 60%;
  border-radius: 15px 15px;
}
#main .header .all>img{
  width:22px;
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
</style>
