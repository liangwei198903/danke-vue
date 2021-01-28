const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/detail/:hid",(req,res)=>{
  //获取数据
  var $hid=req.params.hid;
  var sql="select * from house where hid=?";
  pool.query(sql,[$hid],(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
})
module.exports=router;