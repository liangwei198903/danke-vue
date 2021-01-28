const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/",(req,res)=>{
  //获取数据
  var sql="select * from house";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
	  res.send(result);
  });
});
module.exports=router;