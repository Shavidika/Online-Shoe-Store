const router = require('express').Router();
let Item = require('../Models/Items.js');
const Product = require('../Models/Products.js');
let User = require('../Models/user.js');

router.route ("/add").post((req,res) => { //if the url has /add and the request is post, then execute the following {}
    const name = req.body.name;
    const ID = Number(req.body.ID);
    const size = req.body.size;
    const price = Number(req.body.price);
    const count = Number(req.body.count);

    const newItem = new Item({
        name,
        ID,
        size,
        price,
        count
    })

    newItem.save().then(() => {
        res.json("Item Added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req,res) => { //if the url has / and the request is get, then execute the following
    Item.find().then((items) => {
        res.json(items)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res) => { //async is used to make the function asynchronous
    let itemID = req.params.id; //params is used to get the parameters in the url
    const {name,ID,size,price,count} = req.body;

    const updateItem = {
        name,
        ID,
        size,
        price,
        count
    }

    const update = await Item.findByIdAndUpdate(itemID,updateItem).then(() => { //await is used to wait for the promise. 
        res.status(200).send({status: "Item Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let itemID = req.params.id;

    await Item.findByIdAndDelete(itemID).then(() => {
        res.status(200).send({status: "Item Deleted"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with deleting data", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res) => {
    let itemID = req.params.id;

    const item = await Item.findById(itemID).then((item) => {
        res.status(200).send({status: "Item fetched", item})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with getting item", error: err.message});
    })
})

//for the UserAccounts
router.post('/new', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
        name,
        email,
        password
    })

    newUser.save().then(() => {
        res.json("Item Added")
    }).catch((err) => {
        console.log(err);
    })
  });

  router.route("/users").get((req,res) => { //if the url has / and the request is get, then execute the following
    User.find().then((users) => {
        res.json(users)
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;
//for the Product
// router.post('/products', async (req, res) => {
//     try {
//       const product = new Product(req.body);
//       const savedProduct = await product.save();
//       res.status(201).json(savedProduct);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   });

// router.get('/products', async (req, res) => {
//     try {
//       const products = await Product.find();
//       res.status(200).json(products);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   });
  
// router.get('/products/:id', async (req, res) => {
//     try {
//       const product = await Product.findById(req.params.id);
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(404).json(error);
//     }
//   });



