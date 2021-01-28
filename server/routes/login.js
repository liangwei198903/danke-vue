const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.post("/login",(req,res)=>{
  //获取数据
  var $phone=req.body.phone;
  console.log($phone)
  var $upwd=req.body.upwd;
  //查询数据库
  var sql="select * from user1 where phone=? and upwd=?";
  pool.query(sql,[$phone,$upwd],(err,result)=>{
    if(result.length>0){
	  res.send({code:1,msg:result});
	}else{
	  res.send("0");
	}
  });
});
module.exports=router;