const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    ID:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    count:{
        type:Number,
        required:true
    }
})

const Item = mongoose.model("item",ItemSchema); //create a model called item. This model will have the ItemSchema

module.exports = Item;