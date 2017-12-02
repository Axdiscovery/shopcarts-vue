const Classifymodle = require("../modle/Classifymodle");
class Classifyoperation{

    addclassify(Classify,cb){

        var Classify = new Classifymodle(Classify);
        Classify.save((error,result)=>{
            cb(error,result);
        });
    };
    findclassify(where,cb){
    	Classifymodle.find(where,cb)
    }
}
module.exports = Classifyoperation;