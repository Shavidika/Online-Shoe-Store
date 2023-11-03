import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import BackButton from './BackButton';
import Spinner from './Spinner';
import './EditItem.css';

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [product, setProduct] = useState({
    name: '',
    ID: 0,
    price: 0,
    size: 'size',
    count: 1,
    discount: '(0% off)',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8070/item/get/${id}`)
      .then((res) => {
        setProduct({
          name: res.data.item.name,
          ID: res.data.item.ID,
          price: res.data.item.price,
          size: res.data.item.size,
          count: res.data.item.count,
        });
        setLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar('Error: ' + err.message, { variant: 'error' });
        setLoading(false);
      });
  }, [id, enqueueSnackbar]);

  function increment() {
    setProduct((prevProduct) => ({
      ...prevProduct,
      count: prevProduct.count + 1,
    }));
  }

  function decrement() {
    setProduct((prevProduct) => ({
      ...prevProduct,
      count: prevProduct.count > 1 ? prevProduct.count - 1 : 1,
    }));
  }

  function addToCart() {
    if (product.size === 'size') {
      enqueueSnackbar('Please select a size', { variant: 'error' });
      return;
    }

    axios
      .put(`http://localhost:8070/item/update/${id}`, product)
      .then(() => {
        enqueueSnackbar('Item added to cart', { variant: 'success' });
        navigate('/cart');
      })
      .catch((err) => {
        enqueueSnackbar('Error: ' + err.message, { variant: 'error' });
      });
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="edit-item-container">
      <BackButton />
      <h1 className="edit-item-title">Edit Item</h1>
      <div className="product-details">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price (LKR)</th>
              <th>Size</th>
              <th>Count</th>
              <th>Total Price (LKR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <select
                  className="form-control"
                  id="size"
                  value={product.size}
                  onChange={(e) =>
                    setProduct({ ...product, size: e.target.value })
                  }
                >
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
              </td>
              <td>
                <button
                  className="btn btn-dark"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="count">{product.count}</span>
                <button
                  className="btn btn-dark"
                  onClick={increment}
                >
                  +
                </button>
              </td>
              <td>{product.price * product.count}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-dark"
          onClick={addToCart}
        >
          <i className="fa fa-shopping-cart"></i> Update cart
        </button>
      </div>
    </div>
  );
}
