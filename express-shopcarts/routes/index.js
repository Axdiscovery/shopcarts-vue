var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Classifyoperation = require('../module/operation/Classifyoperation');
var Classifyoperation2 = require('../module/operation/Classifyoperation2');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/api/ClassifyList',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let classifylist = new Classifyoperation();
    classifylist.findclassify({},(err,result)=>{
        res.json(result);
    })
    classifylist.findclassify({},(err,result)=>{
        res.json(result);
    })
});

router.get('/api/goods',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let goodsList = new Classifyoperation2();
    goodsList.findclassify({},(err,result)=>{
        res.json(result);
    })

});
router.get("/delete/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var ids = req.params.id;
    let goodsList = new Classifyoperation2();
    var id =new mongoose.Types.ObjectId(ids);

    goodsList.deletGoods(id,(err,result)=>{
        res.json(result);
        console.log(id)
    })
});
router.get("/updata",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let goodsList = new Classifyoperation2();
    var ids = req.query.id;
    console.log(ids);
    var id =new mongoose.Types.ObjectId(ids);
    var obj=JSON.parse(req.query.name);
    console.log(obj)
    goodsList.updateGoods(id,obj,(err,result)=>{
        res.json(result);
    })
});


module.exports = router;
