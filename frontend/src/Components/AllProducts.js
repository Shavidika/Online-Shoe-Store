import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Item_list.css';
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
import './Item_list.css'

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
    imageSrc: FunSOULS,
    imageAlt: 'Clarks Mens Tilden Walk Oxford',
  },
  {
    id: 114,
    name: "Merrell",
    description: "Alverstone Waterproof",
    longDescription :"Mobilize Alloy Toe Work Boots represent a crucial innovation in the world of occupational footwear. These boots are designed to provide essential protection and support for individuals who work in demanding and hazardous environments, such as construction sites, factories, warehouses, or other settings where foot safety is a top priority.",
    href: "#",
    price: 10000,
    imageSrc: Caterpillar,
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


export default function AllProducts() {
  return (
    <div>
            <div className="bg-white">
    <h2 className="TopicList mt-7">ALL PRODUCTS</h2>
      <div className="mx-auto max-w-2xl px-4 pt-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {products.map((product) => (
                 <Link key={product.id} to={`/products/${product.id}`} className="group">
                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                   <img
                     src={product.imageSrc}
                     alt={product.imageAlt}
                     className="h-full w-full object-cover object-center group-hover:opacity-75"
                   />
                 </div>
                 <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                 <p className="mt-1 text-lg font-medium text-gray-900">{product.description}</p>
                 <p className="mt-1 text-lg font-medium text-gray-900">{product.price} LKR</p>
               </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
