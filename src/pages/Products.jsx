
import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { ProductCard } from '../components/ProductCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;

const Products = () => {

     const [products, setProducts] = useState([]);

       useEffect(() => {
    api.get('/products').then(res => {
      setProducts(res.data.products);
    });
  }, []);
  
  return (
     <div>
     <h2>Inventory Dashboard</h2>
      <Grid>        
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  )
}

export default Products