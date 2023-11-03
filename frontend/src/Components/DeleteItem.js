import React, { useState, useEffect } from 'react';
import BackButton from './BackButton';
import Spinner from './Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import './DeleteItem.css';

const DeleteItem = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteItem = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8070/Item/delete/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Item Removed from the Cart', { variant: 'success' });
        navigate('/cart');
      })
      .catch((error) => {
        setLoading(false);
        alert('Something went wrong while deleting the item');
        console.log(error);
      });
  };

  return (
    <div className="delete-item-container">
      <BackButton />
      <h1 className="delete-item-title">Delete Item</h1>
      {loading ? <Spinner /> : ''}
      <div className="confirmation-box">
        <h3 className="confirmation-text">
          Are you sure you want to remove this item from the cart?
        </h3>
        <button
          className="delete-button"
          onClick={handleDeleteItem}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}

export default DeleteItem;
