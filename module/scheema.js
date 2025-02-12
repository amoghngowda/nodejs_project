const mongoose = require("mongoose");
const { required } = require("yargs");
const data  = new mongoose.Schema({
    Name:{
     type:String,
     required:true
    },
    Age:{
        type:Number
    },
    Work:{
        type:String,
        enum:['hospital','bakery'],
        required:true
    }
});
const person = mongoose.model('person',data);
module.exports=person;
console.log("scheema.js executed"); 