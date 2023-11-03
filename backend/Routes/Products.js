const router = require('express').Router();
let Item = require('../Models/Items.js');
const Product = require('../Models/Products.js');

router.route('/add').post((req,res)=>{
    const name= req.body.name;
    const description= req.body.description;
    const price = Number(req.body.price);
    const imageSrc = req.body.imageSrc;
    const imageAlt = req.body.imageAlt;

    const newProduct =new Product({
            name,description,price,imageSrc,imageAlt
        })

    newProduct.save().then(()=>{
        res.json("Item Added")
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;