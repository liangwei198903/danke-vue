const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.post("/collect",(req,res)=>{
    //获取数据
    var $uid=req.body.uid;
    var $hid=req.body.hid;
    var sql="insert into collect set uid=?,hid=?";
    pool.query(sql,[$uid,$hid],(err,result)=>{
      if(err) throw err;
      res.send("1");
    });
  });
router.get("/delcollect/:hid",(req,res)=>{
    var $hid=req.params.hid;
    var sql="delete from collect where hid=?"
    pool.query(sql,[$hid],(err,result)=>{
        if(err) throw err;
        res.send("1");
    })
});
router.get("/selcollect/:uid",(req,res)=>{
    var $uid=req.params.uid
    console.log($uid)
    var sql="select * from collect where uid=?";
    pool.query(sql,[$uid],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
module.exports=router;