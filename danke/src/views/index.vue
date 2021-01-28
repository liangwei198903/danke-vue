<template>
  <div>
    <router-view></router-view>
    <van-tabbar route v-model="active" active-color="#1296db">
      <van-tabbar-item replace to="/index">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive">
      </van-tabbar-item>
      <van-tabbar-item replace to="/index/second">
        <span>快速找房</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active1 : icon.inactive1">
      </van-tabbar-item>
      <van-tabbar-item replace to="/index/third">
        <span>房屋委托</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active2 : icon.inactive2">
      </van-tabbar-item>
      <van-tabbar-item replace to="/index/fourth">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active3 : icon.inactive3">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0,
      icon: {
        active: require("../assets/img/home_active.png"),
        inactive: require("../assets/img/home.png"),
        active1: require("../assets/img/weituo_active.png"),
        inactive1: require("../assets/img/weituo.png"),
        active2: require("../assets/img/find_active.png"),
        inactive2: require("../assets/img/find.png"),
        active3: require("../assets/img/user_active.png"),
        inactive3: require("../assets/img/user.png")
      }
    }
  }
};
</script>

<style scoped>
  .van-tabbar-item__icon img{
    width:28px;
    height:28px;
  }
</style>
