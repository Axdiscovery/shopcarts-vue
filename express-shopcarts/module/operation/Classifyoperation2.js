const Classifymodle = require("../modle/Classifymodle2");
class Classifyoperation{

    addclassify(Classify,cb){

    var Classify = new Classifymodle(Classify);
        Classify.save((error,result)=>{
            cb(error,result);
        });
    };
    findclassify(where,cb){
        Classifymodle.find(where,cb)
    };

    deletGoods(id,cb){
        Classifymodle.remove({_id:id},cb);
    };

    updateGoods(id,setWhere,cb){
        Classifymodle.update({_id:id},{$set:setWhere},(error,result)=>{
            cb(result);
        })
    };
}
module.exports = Classifyoperation;