import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item_list.css';
import Caterpillar from "../Assets/Caterpillar_Streamline2.png";
import vans_old_skool from "../Assets/Vans_Old_SkoolV.png";
import Saucony_Shadow_5000 from "../Assets/Saucony_Shadow_5000.png";
import Wolverine_Amherst from "../Assets/Merrell_Alverstone_Waterproof.png";

const products = [
    {
      id: 105,
      name: 'Caterpillar',
      description : 'Streamline 2.0 Composite Toe Work Shoe',
      href: '#',
      price: 5000,
      imageSrc: Caterpillar,
      imageAlt: 'Streamline 2.0 Composite Toe Work Shoe',
    },
    {
      id: 106,
      name: 'Vans',
      description : 'Old skool V suede canvas',
      href: '#',
      price: 5200,
      imageSrc: vans_old_skool,
      imageAlt: 'Old skool V suede canvas',
    },
    {
      id: 107,
      name: 'Saucony',
      description : 'Shadow 5000 Outdoor',
      href: '#',
      price: 20000,
      imageSrc: Saucony_Shadow_5000,
      imageAlt: 'Shadow 5000 Outdoor',
    },
    {
      id: 108,
      name: 'Wolverine ',
      description : 'Amherst II CarbonMAX®',
      href: '#',
      price: 10000,
      imageSrc: Wolverine_Amherst,
      imageAlt: 'wolverine_Amherst',
    },
  ]

export default function Top_selling() {
  return (
    <div className="bg-white">
    <h2 className="TopicList">TOP SELLING</h2>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
    <div className="button_positoin">
      <Link to="/All">
        <button type="button" class="btn btn-outline-dark">View All</button>
      </Link>
    </div>
    </div>
  )
}
