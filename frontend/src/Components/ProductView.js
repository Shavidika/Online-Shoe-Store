import React, {useState,useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Caterpillar from "../Assets/Caterpillar.png";
import Saucony_Jazz_Court from "../Assets/Saucony_Jazz_Court.png";
import Nike_InfinityRN4 from "../Assets/Nike_InfinityRN4.png";
import Merrell_Alverstone_Waterproof from "../Assets/Merrell_Alverstone_Waterproof.png";
import Caterpillar1 from "../Assets/Caterpillar_Streamline2.png";
import vans_old_skool from "../Assets/Vans_Old_SkoolV.png";
import Saucony_Shadow_5000 from "../Assets/Saucony_Shadow_5000.png";
import Wolverine_Amherst from "../Assets/Merrell_Alverstone_Waterproof.png";
import AVI from "../Assets/AVI_UNISEX_BASKETBALL_LACING_SHOE_NAVYTURQUOISE.png";
import Beats from "../Assets/Beat.png";
import Clarks from "../Assets/Clarks.png"
import Samsons from "../Assets/Samsons.png"
import FunSOULS from "../Assets/FunSOULS.png"
import "./ProductView.css";
import axios from "axios";
import { MDBBtn, MDBAlert } from 'mdb-react-ui-kit';

const products = [
  {
    id: 101,
    name: "Caterpillar",
    description: "Mobilize Alloy Toe Work Boot ",
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: "#",
    discount: "(36% off)",
    price: 5000,
    imageSrc: Caterpillar,
    imageAlt: "Mobilize Alloy Toe Work Boot ",
  },
  {
    id: 102,
    name: "Saucony",
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    description: "Jazz Court Metallic",
    href: "#",
    price: 5200,
    imageSrc: Saucony_Jazz_Court,
    imageAlt: "Jazz Court Metallic",
  },
  {
    id: 103,
    name: "Nike",
    description: "Infinity React RN 4",
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: "#",
    price: 20000,
    imageSrc: Nike_InfinityRN4,
    imageAlt: "InfinityRN4",
  },
  {
    id: 104,
    name: "Merrell",
    description: "Alverstone Waterproof",
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: "#",
    price: 10000,
    imageSrc: Merrell_Alverstone_Waterproof,
    imageAlt: "Alverstone Waterproof",
  },
  {
    id: 105,
    name: 'Caterpillar1',
    description : 'Streamline 2.0 Composite Toe Work Shoe',
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: '#',
    price: 5000,
    imageSrc: Caterpillar1,
    imageAlt: 'Streamline 2.0 Composite Toe Work Shoe',
  },
  {
    id: 106,
    name: 'AVI',
    description : 'UNISEX BASKETBALL LACING SHOE NAVYTURQUOISE',
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: '#',
    price: 54200,
    imageSrc: AVI,
    imageAlt: 'Old skool V suede canvas',
  },
  {
    id: 107,
    name: 'Saucony',
    description : 'Shadow 5000 Outdoor',
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: '#',
    price: 20000,
    imageSrc: Saucony_Shadow_5000,
    imageAlt: 'Shadow 5000 Outdoor',
  },
  {
    id: 108,
    name: 'Wolverine ',
    description : 'Amherst II CarbonMAX®',
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: '#',
    price: 10000,
    imageSrc: Wolverine_Amherst,
    imageAlt: 'wolverine_Amherst',
  },
  {
    id: 109,
    name: 'Vans',
    description : 'Old skool V suede canvas',
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: '#',
    price: 5200,
    imageSrc: vans_old_skool,
    imageAlt: 'Old skool V suede canvas',
  },
  {
    id: 110,
    name: 'Beats',
    description : 'Gent Sleepers',
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: '#',
    price: 2200,
    imageSrc: Beats,
    imageAlt: 'Old skool V suede canvas',
  },
  {
    id: 111,
    name: 'Clarks',
    description : 'Clarks Men’s Tilden Walk Oxford',
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: '#',
    price: 3200,
    imageSrc: Clarks,
    imageAlt: 'Clarks Mens Tilden Walk Oxford',
  },
  {
    id: 112,
    name: 'Samsons',
    description : 'Samsons Men’s Leather Sandals',
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: '#',
    price: 3500,
    imageSrc: Samsons,
    imageAlt: 'Clarks Mens Tilden Walk Oxford',
  },
  {
    id: 113,
    name: 'Fun Souls',
    description : 'Fun Souls Men’s Leather Sandals',
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: '#',
    price: 13500,
    imageSrc: "https://i.ibb.co/djpCvyB/FB-IMG-1577237784944.jpg",
    imageAlt: 'Clarks Mens Tilden Walk Oxford',
  },
  {
    id: 114,
    name: "Merrell",
    description: "Alverstone Waterproof",
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: "#",
    price: 10000,
    imageSrc: "https://imgs.search.brave.com/xTtcnX4plSMlC-sdtVmvFx_KpppUQfyPOn3RlkJXEJc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbXMu/Y2xvdWRpbmFyeS52/cHN2Yy5jb20vaW1h/Z2VzL2Nfc2NhbGUs/ZHByX2F1dG8sZl9h/dXRvLHFfYXV0bzpi/ZXN0LHRfcHJvZHVj/dFBhZ2VIZXJvR2Fs/bGVyeVRyYW5zZm9y/bWF0aW9uX3YyLHdf/YXV0by9sZWdhY3lf/ZGFtL2VuLXVzL1Mw/MDE1OTY5NDUvTVhQ/LTE4MTA2LVBob3Rv/Ym9va3MtUERQLVRp/ZXIyLUhhbmRzLU1h/cnF1ZWUtMDAxP2Ni/PTRhODliNGE1OWQ4/MTYwZDA0ZmU3NWE2/M2M5NzY2NTdmMDJl/M2Q2YWQ",
    imageAlt: "Alverstone Waterproof",
  },
  {
    id: 102,
    name: "Saucony",
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    description: "Jazz Court Metallic",
    href: "#",
    price: 5200,
    imageSrc: Saucony_Jazz_Court,
    imageAlt: "Jazz Court Metallic",
  },
];


export default function ProductView()  {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const [count, setCount] = useState(1); 
  const navigate = useNavigate();

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 1);
      }
    });
  }

  function addToCart(){
    const size= document.getElementById("size").value;
    const name = product.name;
    const price = product.price;
    const ID=product.id;

    const newItem = {
      name,
      ID,
      size,
      price,
      count
    };
    if(size === "size"){
      alert("Please select a size");
    }
    else{
      axios.post("http://localhost:8070/Item/add", newItem).then(() => {
        alert("Item added to cart");
        navigate("/cart");
      }).catch((err) => {
        alert(err);
      });
    }
  }

  if (!product) {
    return (
      <div>
        <h1>Nothing to show</h1>
      </div>
    );
  }

  return (
    <div>
      {/* <h2>Product Details</h2>
      <img src={product.imageSrc} alt={product.imageAlt} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p> */}

      <div class="container">
        <div class="card">
          <div class="card-body">
            <h3 class="ProductPath">
              Home {">"} Products {">"} {product.name} {">"} {product.description}
            </h3>
            <div class="row">
              <div class="col-lg-4 mr-9 ml-12 col-md-5 col-sm-6">
                <div class="img">
                  <img src={product.imageSrc} class="img-responsive" />
                </div>
              </div>
              <div class="col-lg-7 col-md-7 col-sm-6">
                <h4 class="Product-Name mt-3">
                  {product.name} {product.description}
                </h4>
                <p>{product.longDescription}</p>
                <div class="ml-12 ">
                  <h3 class="box-title mt-2 ml-4">Key Highlights</h3>
                  <ul class="list-unstyled mb-3 ml-8">
                    <li>
                      <i class="fa fa-check mr-2 text-success"></i>HIgh Quality
                    </li>
                    <li>
                      <i class="fa fa-check mr-2 text-success"></i>Long Lasting
                    </li>
                    <li>
                      <i class="fa fa-check mr-2 text-success"></i>1 year
                      warrenty
                    </li>
                  </ul>
                </div>
                  
                  <label for="exampleFormControlSelect1">Select size</label>
                  <select class="form-control" id="size">
                    <option value="size">Size</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                <div className="App">
                <h2 class="Price">
                  {product.price} LKR
                  <small class="text-success ml-2">{product.discount}</small>
                </h2>
                <div class="form-group">
                <div className="form-group ml-4 mt-2">
                  <button className="Button btn btn-dark" onClick={decrement}>
                    -
                  </button>
                  <h1 className="count">{count}</h1>
                  <button className="Button btn btn-dark" onClick={increment}>
                    +
                  </button>
                  </div>
                </div>
                </div>
                <button
                  class="btn btn-dark btn-rounded mr-1"
                  data-toggle="tooltip"
                  title=""
                  onClick={addToCart}
                  data-original-title="Add to cart"
                >
                  <i class="fa fa-shopping-cart"> </i>
                  Add to cart
                </button>
                {/* <button class="btn btn-primary btn-rounded">Buy Now</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
