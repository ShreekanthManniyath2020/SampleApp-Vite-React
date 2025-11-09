import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const ProductCard = ({ product }) => (
    
  <Card>
    <img src={product.thumbnail} alt={product.title} width="100%" height="150" />
    <h3>{product.title}</h3>
    <p>Stock: {product.stock}</p>
    <p>${product.price}</p>
    <Link to={`/product/${product.id}`}>View All</Link>
  </Card>
);