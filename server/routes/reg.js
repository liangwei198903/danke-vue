const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/seluser/:phone",(req,res)=>{
  //获取数据
  var $phone=req.params.phone;
  var sql="select uid from user1 where phone=?";
  pool.query(sql,[$phone],(err,result)=>{
    if(result.length>0){
	  res.send("1");
	}else{
	  res.send("0");
	}
  });
})
router.post("/reg",(req,res)=>{
  //获取数据
  var $phone=req.body.phone;
  var $upwd=req.body.upwd;
  var sql="insert into user1 set phone=?,upwd=?";
  pool.query(sql,[$phone,$upwd],(err,result)=>{
    if(err) throw err;
    res.send("1");
  });
});
module.exports=router;