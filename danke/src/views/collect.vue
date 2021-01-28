<template>
    <div id="main">
        <img @click="back" src="../assets/img/back.png">
       <h4>我的收藏</h4>
        <div v-for="(item,i) of collect" :key=i class="house">
            <div class="left">
                <img :src="item.pic1">
            </div>
            <div class="right">
                <p class="title">{{item.title}}</p>
                <p>{{item.size}}</p>
                <p class="price">¥{{item.price}}.00</p>
                <button @click="del(item.hid)">取消收藏</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            collect:[]
        }
    },
    created(){
        var uid=sessionStorage.getItem("uid")
        this.axios.get("/user/selcollect/"+uid).then(res=>{
            var arr=res.data;
            var arr1=[];
            for(var i of arr){
               arr1.push(i.hid)
            }
            var house=[];
            for(var j=0;j<arr1.length;j++){
                this.axios.get(`/index/detail/${arr1[j]}`).then(res => {
                    house.push(res.data[0])
                });
            }
            this.collect=house
        })
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        del(hid){
            this.axios.get("/user/delcollect/"+hid).then(res=>{
            if(res.data==1){
               this.$toast('取消收藏成功')
               this.$router.go(0)
            }
          })
        }
    }
}
</script>

<style scoped>
    #main{
        margin:10px;
    }
    #main .house{
        display: flex;
        margin:10px;
    }
    #main .house .left,.right{
        width:50%;
    }
    #main .house .right p{
        margin:2px;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    #main .house .right p.price{
        color:#f00;
    }
    #main .house .right button{
        font-size: 12px;
        border:0;
        outline: 0;
        padding:3px 8px;
        border-radius: 5px;
        color:#fff;
        background:skyblue;
    }
    #main .house img{
        width:70%;
        border-radius: 5px;
    }
</style>
