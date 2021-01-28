//引入espress模块
const express=require('express');
const session = require("express-session");
const bodyParser=require('body-parser');
const cors=require("cors");
//引入路由模块
var index=require("./routes/index.js");
var detail=require("./routes/detail.js");
var reg=require("./routes/reg.js");
var login=require("./routes/login.js");
var collect=require("./routes/collect.js");
//创建app服务器
var app=express();
//监听端口
app.listen(8000);
app.use(cors({
  origin:['http://localhost:8080',"http://127.0.0.1:5500","http://127.0.0.1:8080"],
  credentials:true
}))
console.log('创建成功...');
//托管静态资源
app.use( express.static('public') );
//使用body-parser
app.use( bodyParser.urlencoded({
  extended:false
}) );
//将服务器的session，放在req.session中
app.use(session({
  secret:'随机字符串',
  //过期时间ms
  cookie:{maxAge:60*1000*30},
  resave:false,
  saveUninitialized:true
}));
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/index",detail);
app.use("/user",reg);
app.use("/user",login);
app.use("/user",collect);