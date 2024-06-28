import React, { useEffect, useState } from 'react';
import rack from '../assets/fast_food.webp';
import ProductList from '../components/ProductList';
import type { Product } from '../types';

interface Props {
  // Define the props for your component here
}


const Home: React.FC<Props> = () => {

  const API_URL_SEGMENT = 'http://localhost:3000/api/v1/';
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL_SEGMENT + 'products');
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
      <div
        className="flex min-h-[560px] flex-col gap-6 bg-cover @[480px]:rounded-xl items-center justify-center p-4"
        style={{ backgroundImage: `url(${rack})` }}
        >
          <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-[#897261] flex border border-[#e6e0db] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                data-icon="MagnifyingGlass"
                data-size="20px"
                data-weight="regular"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                  ></path>
                </svg>
              </div>
              <input
                placeholder="Recherche"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181411] focus:outline-0 focus:ring-0 border border-[#e6e0db] bg-white focus:border-[#e6e0db] h-full placeholder:text-[#897261] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                value=""
              />
              <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#e6e0db] bg-white pr-[7px]">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ec6d13] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                >
                  <span className="truncate">Recherche</span>
                </button>
              </div>
            </div>
          </label>

      </div>
      <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meilleurs Fast-food</h2>
      <ProductList productList={products}/>

     </div>
  );
};


export default Home;
