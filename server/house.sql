SET NAMES UTF8;
DROP  DATABASE  IF  EXISTS danke;
CREATE  DATABASE danke CHARSET=UTF8;
USE danke;

CREATE TABLE house(
  hid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(),
  way VARCHAR(64),
  size VARCHAR(64),
  floor VARCHAR(64),
  price VARCHAR(64),
  count VARCHAR(64),
  pic1 VARCHAR(64),
  pic2 VARCHAR(64),
  pic3 VARCHAR(64),
  addr VARCHAR(64),
);

CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(64),
  upwd VARCHAR(64)
);

CREATE TABLE collect(
  uid INT,
  hid INT
);

INSERT INTO house VALUES
(NULL,'光谷广场 华乐苑 朝南 主卧','合租','4室1厅 14m²','5/6层',1310,NUll,
'http://localhost:8000/img/4-1-1.jpg','http://localhost:8000/img/4-1-2.jpg','http://localhost:8000/img/4-1-3.jpg','武汉市洪山区光谷广场华乐苑'),
(NULL,'光谷广场 华乐山庄 朝西北 次卧A室','合租','4室1厅 14m²','4/8层',1110,NUll,
'http://localhost:8000/img/4-2-1.jpg','http://localhost:8000/img/4-2-2.jpg','http://localhost:8000/img/4-2-3.jpg',NUll),
(NULL,'珞雄路 湖北中医小区 次卧C室','合租','3室1厅 11m²','2/6层',1220,NUll,
'http://localhost:8000/img/h1-01.png','http://localhost:8000/img/h1-02.png','http://localhost:8000/img/h1-03.png',NUll),
(NULL,'保利华都 朝南 次卧 A室','合租','4室1厅 10m²','14/28层',1240,NUll,
'http://localhost:8000/img/h2-01.png','http://localhost:8000/img/h2-02.png','http://localhost:8000/img/h2-03.png',NUll),
(NULL,'绿汀雅境 朝南 主卧 C室','合租','4室1厅 13m²','3/28层',1076,NUll,
'http://localhost:8000/img/h3-01.png','http://localhost:8000/img/h3-02.png','http://localhost:8000/img/h3-03.png',NUll),
(NULL,'光谷广场 金地天悦 朝南 A室','合租','3室1厅 16m²','2/23层',1286,1370,
'http://localhost:8000/img/h4-01.png','http://localhost:8000/img/h4-02.png','http://localhost:8000/img/h4-03.png',NUll),
(NULL,'关山大道 保利时代 朝南 主卧D室','合租','4室1厅 20m²','31/42层',715,1430,
'http://localhost:8000/img/h5-01.png','http://localhost:8000/img/h5-02.png','http://localhost:8000/img/h5-03.png',NUll),
(NULL,'关山大道 保利花园 朝西 C室','合租','3室1厅 10m²','16/18层',1066,1150,
'http://localhost:8000/img/h6-01.png','http://localhost:8000/img/h6-02.png','http://localhost:8000/img/h6-03.png',NUll),
(NULL,'光谷广场 花城新都 朝南 C室','合租','4室1厅 11m²','3/6层',1230,NULL,
'http://localhost:8000/img/h7-01.png','http://localhost:8000/img/h7-02.png','http://localhost:8000/img/h7-03.png',NUll),
(NULL,'关山大道 五角西岸 朝南 A室','合租','3室1厅 13m²','43/46层',1150,NULL,
'http://localhost:8000/img/h4-01.png','http://localhost:8000/img/h4-02.png','http://localhost:8000/img/h4-03.png',NUll);
