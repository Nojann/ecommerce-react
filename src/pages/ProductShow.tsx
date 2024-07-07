import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { useParams } from 'react-router-dom';

const ProductShow: React.FC = () => {

  const { itemId } = useParams();
  const API_URL_SEGMENT = 'http://localhost:3000/api/v1/';
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    fetch(API_URL_SEGMENT + `products/${itemId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
  }
  , [itemId]);

  const handleAddCart = async (): Promise<void> => {
    const response = await fetch(API_URL_SEGMENT + 'order_items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({product_id: product?.id}),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Order created:', data);
    } else {
      console.error('Failed to create order');
    }
  }

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">

          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-14">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-fit"
                style={{ backgroundImage: `url("${product?.image_url}")` }}
              ></div>
              <p className="text-[#1c140d] text-base font-normal leading-normal flex-1 truncate">{product?.category}</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{ backgroundImage: `url("${product?.image_url}")` }}
                ></div>
              </div>
            </div>
            <h1 className="text-[#1c140d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">{product?.name}</h1>
            <p className="text-[#1c140d] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {product?.description}
            </p>
            <h2 className="text-[#1c140d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Détails</h2>
            <div className="p-4 grid grid-cols-2">
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#e8dace] py-4 pr-2">
                <p className="text-[#9c7049] text-sm font-normal leading-normal">Enseigne</p>
                <p className="text-[#1c140d] text-sm font-normal leading-normal">{product?.supplier_name}</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#e8dace] py-4 pl-2">
                <p className="text-[#9c7049] text-sm font-normal leading-normal">Categorie</p>
                <p className="text-[#1c140d] text-sm font-normal leading-normal">{product?.category}</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#e8dace] py-4 pr-2">
                <p className="text-[#9c7049] text-sm font-normal leading-normal">Prix</p>
                <p className="text-[#1c140d] text-sm font-normal leading-normal">{product?.price} €</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#e8dace] py-4 pl-2">
                <p className="text-[#9c7049] text-sm font-normal leading-normal">Stock</p>
                <p className="text-[#1c140d] text-sm font-normal leading-normal">{product?.stock}</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#e8dace] py-4 pr-2 col-span-2 pr-[50%]">
                <p className="text-[#9c7049] text-sm font-normal leading-normal">Ingredients</p>
                <p className="text-[#1c140d] text-sm font-normal leading-normal">{product?.ingredients}</p>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 md:h-12 md:px-5 bg-[#ec6d13] text-white text-sm font-bold tracking-wide md:text-base"
                onClick={() => handleAddCart()}
              >
                <span className="truncate ">Ajouter au panier</span>
              </button>
            </div>
          </div>
        </div>

  );
};

export default ProductShow;
