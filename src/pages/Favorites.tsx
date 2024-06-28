import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { Product } from '../types';

const Favorites: React.FC = () => {

  const API_URL_SEGMENT = 'http://localhost:3000/api/v1/';
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL_SEGMENT + 'favorites');
          const data = await response.json();
          setProducts(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

  return (
    <div>
      <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Favoris</h2>
      <ProductList
      productList={products}
      buttons_active = {false} />
    </div>
  );
};

export default Favorites;
