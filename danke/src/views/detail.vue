<template>
  <div id="main">
    <div class="share">
        <img @click="back" id="img" src="../assets/img/back.png">
      <img src="../assets/img/share.png">
    </div>
    <div class="pic">
      <div class="left">
        <img :src="house.pic1">
      </div>
      <div class="right">
        <div>
          <img :src="house.pic2">
        </div>
        <div>
          <img :src="house.pic3">
        </div>
      </div>
    </div>
    <h3>{{house.title}}</h3>
    <div class="text">
      <ul>
        <li>地铁沿线</li>
        <li>房间明亮</li>
        <li>分期免手续费</li>
      </ul>
      <p>￥{{house.price}}<span>/月·活动价<del>{{house.count}}</del></span></p>
    </div>
    <div class="size">
      <ul>
        <li>朝向-南</li>
        <li>{{house.size}}</li>
        <li>{{house.floor}}</li>
      </ul>
    </div>
    <h4>租住信息</h4>
    <div>
      <ul class="msg">
        <li><p>签约时间:<span>可签约1年/可签约2年</span></p></li>
        <li><p>入住状态:<span>可立即入住</span></p></li>
        <li><p>房屋编号:<span>138739-A</span></p></li>
      </ul>
    </div>
    <h4>房屋简介</h4>
     <div class="bottom">
        <div>
          <img src="../assets/img/bed.png">
          <p>床</p>
        </div>
        <div>
          <img src="../assets/img/book.png">
          <p>衣柜</p>
        </div>
        <div>
          <img src="../assets/img/table.png">
          <p>书桌</p>
        </div>
        <div>
          <img src="../assets/img/kt.png">
          <p>空调</p>
        </div>
        <div>
          <img src="../assets/img/more.png">
          <p>更多</p>
        </div>
      </div>
      <div class="collect">
        <div>
          <img @click="changeImage()" :src="imgUrl">
          <p>收藏</p>
        </div>
        <div>
          <img src="../assets/img/qianyue.png">
          <p>关注</p>
        </div>
        <button>电话咨询</button>
        <button>预约看房</button>
      </div>
      <div id="XSDFXPage" class="XSDFXPage"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      house: {},
      imgUrl: require("../assets/img/collect.png"),
      hid: "",
      addr: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    changeImage() {
      var isLogin = sessionStorage.getItem("Flag");
      var uid = sessionStorage.getItem("uid");
      if (isLogin) {
        if (this.imgUrl == require("../assets/img/collect.png")) {
          this.imgUrl = require("../assets/img/collected.png");
          this.axios
            .post("/user/collect", `uid=${uid}&hid=${this.hid}`)
            .then(res => {
              if (res.data == 1) {
                this.$toast("收藏成功");
              }
            });
        } else if (this.imgUrl == require("../assets/img/collected.png")) {
          this.imgUrl = require("../assets/img/collect.png");
          this.axios.get("/user/delcollect/" + this.hid).then(res => {
            //console.log(res.data)
            if (res.data == 1) {
              this.$toast("取消收藏");
            }
          });
        }
      } else {
        this.$dialog
          .alert({
            title: "提示",
            message: "您还未登录,请先登录"
          })
          .then(res => {
            this.$router.push("/login");
          });
      }
    }
  },
  mounted() {
    var hid = this.$route.query.hid;
    this.axios.get(`/index/detail/${hid}`).then(res => {
      this.house = res.data[0];
      this.hid = res.data[0].hid;
      this.addr = res.data[0].addr;
      console.log(this.addr);
      this.axios("https://restapi.amap.com/v3/geocode/geo", {
        params: { key: "6e7239cd1f1aaf595bca3753a67986f8", address: this.addr }
      }).then(res => {
        console.log(res.data.geocodes[0].location);
        var jwd = res.data.geocodes[0].location;
        var j = parseFloat(jwd.split(",")[0]);
        var w = parseFloat(jwd.split(",")[1]);
        console.log(j, w);
        //创建Map实例
        var map = new BMap.Map("XSDFXPage");

        // 初始化地图,设置中心点坐标
        var point = new BMap.Point(j, w); // 创建点坐标
        map.centerAndZoom(point, 15);
        //设置标注的经纬度
        var marker = new BMap.Marker(new BMap.Point(j, w));
        //把标注添加到地图上
        map.addOverlay(marker);
      });
    });
  }
};
</script>

<style scoped>
#main .collect button {
  border: 0;
  outline: 0;
  font-size: 14px;
  background: skyblue;
  color: #fff;
  height: 30px;
  padding: 5px 15px;
  border-radius: 15px;
}
#main .collect {
  width: 95%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  position: fixed;
  bottom: 0;
}
#main .collect p {
  margin: 0;
  font-size: 12px;
}
#main .collect img {
  width: 25px;
}
#main .bottom p {
  margin: 0;
  font-size: 12px;
  text-align: center;
}
#main .bottom img {
  width: 23px;
}
#main .bottom {
  display: flex;
  justify-content: space-around;
}
h4 {
  margin: 15px 0;
}
#main .msg span {
  margin-left: 5px;
}
#main .msg {
  margin-left: 20px;
}
#main .msg p {
  margin: 5px;
  font-size: 12px;
  color: #666;
}
#main .size ul li {
  font-size: 14px;
}
#main .size ul {
  display: flex;
  justify-content: space-around;
  margin: 10px;
}
#main .text img {
  width: 100%;
}
#main .text p {
  color: #f00;
}
#main .text span {
  color: #666;
  font-size: 12px;
}
#main .text ul > li + li {
  margin-left: 10px;
}
#main .text ul > li {
  color: #fff;
  background: skyblue;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 12px;
}
#main .text ul {
  display: flex;
}
#main .pic {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
#main .pic .left {
  width: 61.5%;
}
#main .pic .right {
  width: 30%;
  margin-left: 10px;
}
#main .pic img {
  width: 100%;
  border-radius: 5px;
}
#main .share {
  display: flex;
  justify-content: space-between;
}
#main {
  margin: 10px;
}
#XSDFXPage{
  height: 350px;
  width: 100%;
}
</style>


