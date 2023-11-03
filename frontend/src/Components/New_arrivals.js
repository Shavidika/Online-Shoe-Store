import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item_list.css';
import Caterpillar from "../Assets/Caterpillar.png";
import Saucony_Jazz_Court from "../Assets/Saucony_Jazz_Court.png";
import Nike_InfinityRN4 from "../Assets/Nike_InfinityRN4.png";
import Merrell_Alverstone_Waterproof from "../Assets/Merrell_Alverstone_Waterproof.png";
import ProductView from './ProductView';

const products = [
    {
      id: 101,
      name: 'Caterpillar',
      description : 'Mobilize Alloy Toe Work Boot ',
      href: '#',
      price: 5000,
      imageSrc: Caterpillar,
      imageAlt: 'Mobilize Alloy Toe Work Boot ',
    },
    {
      id: 102,
      name: 'Saucony',
      description : 'Jazz Court Metallic',
      href: '#',
      price: 5200,
      imageSrc: Saucony_Jazz_Court,
      imageAlt: 'Jazz Court Metallic',
    },
    {
      id: 103,
      name: 'Nike',
      description : 'Infinity React RN 4',
      href: '#',
      price: 20000,
      imageSrc: Nike_InfinityRN4,
      imageAlt: 'InfinityRN4',
    },
    {
      id: 104,
      name: 'Merrell',
      description : 'Alverstone Waterproof',
      href: '#',
      price: 10000,
      imageSrc: Merrell_Alverstone_Waterproof,
      imageAlt: 'Alverstone Waterproof',
    },
  ]

  export default function New_arrivals() {
    return (
      <div className="bg-white">
        <h2 className="TopicList">NEW ARRIVALS</h2>
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
            <button type="button" className="btn btn-outline-dark">View All</button>
          </Link>
          
        </div>
      </div>
    );
  }