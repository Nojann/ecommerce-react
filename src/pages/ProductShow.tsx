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

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/363b9b01-0106-4b98-b879-a2eeca1d85b3.png")` }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#1c140d] text-base font-medium leading-normal line-clamp-1">Shopping Cart</p>
                <p className="text-[#9c7049] text-sm font-normal leading-normal line-clamp-2">2 items</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
              <div className="text-[#1c140d] flex items-center justify-center rounded-lg bg-[#f4ede7] shrink-0 size-12" data-icon="MapPin" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#1c140d] text-base font-medium leading-normal line-clamp-1">Santa Monica</p>
                <p className="text-[#9c7049] text-sm font-normal leading-normal line-clamp-2">Deliver to 10780 Santa Monica Blvd</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-[72px] py-2">
              <div className="text-[#1c140d] flex items-center justify-center rounded-lg bg-[#f4ede7] shrink-0 size-12" data-icon="Clock" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#1c140d] text-base font-medium leading-normal line-clamp-1">Delivery Time</p>
                <p className="text-[#9c7049] text-sm font-normal leading-normal line-clamp-2">Today, 7-8pm (60 mins)</p>
              </div>
            </div>
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-14">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-fit"
                style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/98ddc2b8-6783-44a4-bec2-71f5f568d26b.png")` }}
              ></div>
              <p className="text-[#1c140d] text-base font-normal leading-normal flex-1 truncate">Strawberries</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/5473e00e-0cb3-4c7b-9b16-8745e3c0b4af.png")` }}
                ></div>
              </div>
            </div>
            <h1 className="text-[#1c140d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">{product?.name}</h1>
            <p className="text-[#1c140d] text-base font-normal leading-normal pb-3 pt-1 px-4">
              A fresh, juicy and sweet treat. Perfect as a snack or to add a touch of sweetness to your meals.
            </p>
            <h2 className="text-[#1c140d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Details</h2>
            <div className="p-4 grid grid-cols-2">
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#e8dace] py-4 pr-2">
                <p className="text-[#9c7049] text-sm font-normal leading-normal">Supplier</p>
                <p className="text-[#1c140d] text-sm font-normal leading-normal">Local Farmers Market</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#e8dace] py-4 pl-2">
                <p className="text-[#9c7049] text-sm font-normal leading-normal">Category</p>
                <p className="text-[#1c140d] text-sm font-normal leading-normal">Produce</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#e8dace] py-4 pr-2">
                <p className="text-[#9c7049] text-sm font-normal leading-normal">Price</p>
                <p className="text-[#1c140d] text-sm font-normal leading-normal">$3.99/lb</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#e8dace] py-4 pl-2">
                <p className="text-[#9c7049] text-sm font-normal leading-normal">Stock Level</p>
                <p className="text-[#1c140d] text-sm font-normal leading-normal">In Stock</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-solid border-t-[#e8dace] py-4 pr-2 col-span-2 pr-[50%]">
                <p className="text-[#9c7049] text-sm font-normal leading-normal">Ingredients</p>
                <p className="text-[#1c140d] text-sm font-normal leading-normal">Strawberries</p>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f48625] text-[#1c140d] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

  );
};

export default ProductShow;
