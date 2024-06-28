import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { Product } from '../types';

interface Order {
  id: number;
  statut: string;
  user_id: number;
  order_items: Product[];
  created_at: string;
  updated_at: string;
}

const Orders: React.FC = () => {


  const API_URL_SEGMENT = 'http://localhost:3000/api/v1/';
  const [orders, setOrders] = useState<Order[]>([]);
  const [paiding, setPaiding] = useState<boolean>(false);

  const countTotalPrice = (order_items: Product[]) => {
    let total : number = 0;
    order_items.forEach((item: Product) => {
      total += Number(item.price);
    });
    return total;
  }

  const date = (date: string) => {

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long', // Full name of the day
      year: 'numeric',
      month: 'long', // Full name of the month
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    const dateObj = new Date(date);

    return dateObj.toLocaleString('fr-FR', options);
  }

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL_SEGMENT + 'orders');
          const data = await response.json();
          setOrders(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, [paiding]);

    const handlePaid = async (order_id: number): Promise<void> => {
      console.log('Order ID:', order_id)
      const response = await fetch(API_URL_SEGMENT + 'orders/' + order_id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({statut: 'paid'}),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Order updated:', data);
        setPaiding(true);
      } else {
        console.error('Failed to update order');
      }
    }


  return (
    <div>
      <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Commandes</h2>
      {orders.map((order: Order, index :number) => (
        <div className='pb-6'>
          <div className="flex justify-between pb-4">
            <h3 className='text-[#181411] text-[18px] font-bold leading-tight'>Commande #{index+1} -
              <span className='italic font-light'> {order.statut}</span>
            </h3>
            <span className='leading-tight italic font-light'>Le {date(order.created_at)}</span>
          </div>
          <ProductList
            productList={order.order_items}
            buttons_active={false}/>
            <div className="flex justify-between">
              <p className='font-bold '>TOTAL : {countTotalPrice(order.order_items)} €</p>
              {order.statut === 'draft' && <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ec6d13] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                onClick={() => handlePaid(order.id)}
              > Paiement </button>}
            </div>
            <div className="border-t border-gray-300 my-4"></div>
        </div>
      )).reverse()
      }
    </div>
  );
};

export default Orders;
