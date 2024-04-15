import { FC, useEffect, useState } from 'react';
import { ICartItem } from '@/entities/Cart/types';
import { Cart } from '@/entities/Cart/Cart';


export const CartFeature: FC = () => {
  
  const [items, setItems] = useState<ICartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  
  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);
  
  return (
    <>
      <Cart
        items={items}
        total={total}
      />
    </>
  );
};