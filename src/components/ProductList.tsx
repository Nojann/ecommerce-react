import React, { useState } from 'react';
import favorite from '../assets/favorite.svg';
import cart from '../assets/cart.svg';
import type { Product } from '../types';

interface ProductListProps {
  buttons_active?: boolean;
  productList: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ productList, buttons_active = true }) => {

    const API_URL_SEGMENT = 'http://localhost:3000/api/v1/';

    const handleAddFavorite = async (item_id: number): Promise<void> => {

      const response = await fetch(API_URL_SEGMENT + 'favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({product_id: item_id }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Favorite created:', data);
      } else {
        console.error('Failed to create favorite');
      }

    };

    const handleAddCart = async (item_id: number): Promise<void> => {

      const response = await fetch(API_URL_SEGMENT + 'order_items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({product_id: item_id}),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Order created:', data);
      } else {
        console.error('Failed to create order');
      }
    }

    return (
      <div className='grid grid-cols-4 gap-4'>

          { productList?.map((product :Product) => (
            <Product
              key={product.id}
              buttons_active={buttons_active}
              item_id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.image_url}
              addFavorite={handleAddFavorite}
              addOrder={handleAddCart}
            />
          ))
          }
      </div>
    );
};

interface ProductProps {
  buttons_active?: boolean,
  item_id: number,
  name : string,
  price : number,
  imageUrl : string,
  addFavorite: (item_id: number) => Promise<void>,
  addOrder: (item_id: number) => Promise<void>,
}

const Product: React.FC<ProductProps> = ({buttons_active, item_id, name, price, imageUrl, addFavorite, addOrder}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationFavorite = () => {
    console.log('handleAnimationFavorite');
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }

  return (
    <div className="flex flex-col pb-3">
      <a href={`/products/${item_id}`}>
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
          style={{ backgroundImage: `url(${imageUrl})`}}
        ></div>
        <div>
          <p className="text-[#181411] text-base font-medium leading-normal">{name}</p>
          <p className="text-[#897261] text-sm font-normal leading-normal">{price} €</p>
        </div>
      </a>
      {buttons_active &&
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center justify-center gap-2 py-2">
          <button className={`text-[#88636f] ${isAnimating ? 'animate-ping' : ''}`}
                  data-icon="Heart"
                  data-size="24px"
                  data-weight="regular"
                  onClick={() => {
                    handleAnimationFavorite()
                    addFavorite(item_id)
                  }}>
            <img src={favorite} alt="favorite" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 px-3 py-2">
          <button className="text-[#88636f]" data-icon="ShoppingCart" data-size="24px" data-weight="regular" onClick={() => addOrder(item_id)}>
            <img src={cart} alt="cart" />
          </button>
        </div>
      </div>}
    </div>
  )
}

export default ProductList;
