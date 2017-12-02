const mongoose = require("../config/mongoose");
var Schema = mongoose.Schema;
 var ClassSchema = new Schema({
 	title:{type:String},
 	price:{type:String},
 	pic:{type:String},
 	qal:{type:Number}
 });
 var Classifymodle = mongoose.model("good",ClassSchema);
 module.exports = Classifymodle;