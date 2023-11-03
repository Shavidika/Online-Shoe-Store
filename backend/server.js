const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // for parsing incoming request bodies
const cors = require("cors"); // for providing a Connect/Express middleware that can be used to enable CORS with various options.
const app = express();
const dotenv = require("dotenv");
require("dotenv").config(); //to access the .env file

const PORT = process.env.PORT || 8070; //assign 8070 or any available port to PORT

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; //get the mongodb url from .env file

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success!");
});

const itemRouter = require("./Routes/Items.js");
app.use("/item", itemRouter); //if the url has /item, then it will redirect to itemRouter

const productRouter = require("./Routes/Products.js");
app.use("/product", productRouter);

app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Server is up and running on port number : ${PORT}`);
=======
  console.log(`Server is up and running on port number: ${PORT}`);
>>>>>>> de3c69b08afb272db9ccc0d283074345cdba9185
}); 
