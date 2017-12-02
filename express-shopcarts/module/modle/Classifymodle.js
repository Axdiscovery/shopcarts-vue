const mongoose = require("../config/mongoose");
var Schema = mongoose.Schema;
 var ClassSchema = new Schema({
 	title:{type:String},
 	price:{type:String},
 	photo:{type:String},
 	name:{type:String},
    time:{type:String}
 });
 var Classifymodle = mongoose.model("ClassifyList",ClassSchema);
 module.exports = Classifymodle;