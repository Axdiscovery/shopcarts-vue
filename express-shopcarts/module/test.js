const Classifyoperation2 = require("./operation/Classifyoperation2");

let pro = new Classifyoperation2();
let list =[
    {"title":"日着原创设计女装 拼接网纱连衣裙","price":300,"pic":"src/assets/77f4.jpg","qal":1},
    {"title":"妮朵雅2017春夏季新款韩版修身中长款","price":200,"pic":"src/assets/93b92.jpg","qal":1},
    {"title":"Tianan2017夏季新款韩版短袖宽松中长款","price":400,"pic":"src/assets/a13.jpg","qal":1},
    {"title":"伶婉2017春装新款韩版修身显瘦春夏季雪","price":600,"pic":"src/assets/b358.jpg","qal":1},
    {"title":"SexeMara连衣裙2017春夏季新款女装韩","price":100,"pic":"src/assets/e2.jpg","qal":1},
    {"title":"韩都衣舍2017韩版女装夏装新款宽松显瘦","price":800,"pic":"src/assets/e54.jpg","qal":1}
];

list.forEach((data, inx) => {
    var proObj = {
        title: "",
        price: "",
        pic: "",
        qal:0
    };
    console.log(inx);
    proObj.title=data.title;
    proObj.price=data.price;
    proObj.pic=data.pic;
    proObj.qal=data.qal;
    pro.addclassify(proObj, (error, result) => {
        console.log(result);
    })
})