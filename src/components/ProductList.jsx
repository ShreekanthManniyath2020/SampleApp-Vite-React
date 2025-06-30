import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {api} from '../api';
import {ProductCard } from '../components/ProductCard'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Card = styled.div`
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
       api.get('/products').then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <img src={product.thumbnail} alt={product.title} width="100%" height="150" style={{ objectFit: 'cover' }} />
          <h3>{product.title}</h3>
          <p>{product.description.slice(0, 60)}...</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;