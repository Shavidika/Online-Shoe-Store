import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cart.css";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { MdOutlineAddBox ,MdOutlineEdit ,MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    axios
      .get("http://localhost:8070/Item/")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="all p-4 ml-10 mr-10 pb-5 px-7">
      <dev className="table">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Cart List</h1>
        <Link to="/All">
          <MdOutlineAddBox className="text-4xl text-sky-800 hover:text-black" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md text-center">Item Code</th>
              <th className="border border-slate-600 rounded-md text-center">Name</th>
              <th className="border border-slate-600 rounded-md max-md:hidden text-center">
                Size
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden text-center">Price</th>
              <th className="border border-slate-600 rounded-md text-center">Count</th>
              <th className="border border-slate-600 rounded-md text-center">Total</th>
              <th className="border border-slate-600 rounded-md text-center">Modify</th>
              
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                OSS{item.ID}
                </td>
                <td className="border border-slate-700 rounded-md text-center">{item.name}</td>
                <td className="border border-slate-700 rounded-md max-md:hidden text-center">
                  {item.size}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden text-center">
                  {item.price}
                </td>
                <td className="border border-slate-700 rounded-md text-center">{item.count}</td>
                <td className="border border-slate-700 rounded-md text-center">
                  {item.price * item.count}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    {/* <Link to={`/Details/${item._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />  
                    </Link> */}
                    <Link to={`/edit/${item._id}`}>
                      <MdOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />  
                    </Link>
                    <Link to={`/delete/${item._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />  
                    </Link>
                    
                  </div>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </dev>
    </div>
  );
}
