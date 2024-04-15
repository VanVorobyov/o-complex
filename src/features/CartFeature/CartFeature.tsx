import { FC, useState, useEffect } from 'react';
import { ICartItem } from '@/entities/Cart/types';
import { Cart } from '@/entities/Cart/Cart';
import useLocalStorage from '@/shared/hooks/useLocalStorage';

export const CartFeature: FC = () => {
  const [items, setItems] = useState<ICartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  
  const { getItem } = useLocalStorage('cartItems', []);
  
  useEffect(() => {
    const items = getItem();
    const total = calculateTotal(items);
    setItems(items);
    setTotal(total);
  }, [getItem]);
  
  
  const calculateTotal = (items: ICartItem[]): number => {
    const total = items.reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0);
    console.log(`total2 --> `, total);
    
    return total;
  };
  
  return (
    <>
      <Cart items={items} total={total} />
    </>
  );
};
