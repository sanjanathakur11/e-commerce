import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import TextField from '@mui/material/TextField';
import SingleProduct from '../../components/SingleProduct';

const Products = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pro-container">
      <div className="header-container">
        <TextField id="outlined-basic" label="Search the products" variant="outlined" 
        value={searchTerm} onChange={handleSearchChange} className="search-field" />
      </div>
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))
        ) : (
          <div className="no-products">Product not found</div>
        )}
      </div>
    </div>
  );
};

export default Products;
