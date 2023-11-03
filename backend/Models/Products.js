const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  price:{ 
    type:Number,
    required:true
  },
  imageSrc: {
    type:String,
    required:true
  },
  imageAlt:{ 
    type:String,
    required:true
  }
});

module.exports = mongoose.model('Product', productSchema);
