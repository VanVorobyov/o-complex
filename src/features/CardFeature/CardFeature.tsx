import React, { FC, useState, useEffect } from 'react';
import { Card } from '@/entities/Card/Card';
import { ICard, updateItem } from '@/entities/Card/types';
import useLocalStorage from '@/shared/hooks/useLocalStorage';

export const CardFeature: FC<ICard & updateItem> = ({
  id = 0,
  image_url = '',
  title = '',
  description = '',
  price = 0,
  updateItem,
  removeItem
}) => {
  
  
  const [count, setCount] = useState(1);
  const [isInBasket, setIsInBasket] = useState(false);
  const { getItem } = useLocalStorage('cartItems', []);
  
  
  useEffect(() => {
    const items = getItem();
    const isInBasket = items.some((item: ICard) => item.id === id);
    setIsInBasket(isInBasket);
    setCount(isInBasket ? items.find((item: ICard) => item.id === id)?.quantity || 1 : 1);
  }, []);
  
  const increase = () => {
    if (count < 99999) {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        updateItem({ id, title, quantity: newCount, price: price, totalPrice: price * newCount });
        return newCount;
      });
    }
  };
  
  const decrease = () => {
    if (count > 1) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        updateItem({ id, title, quantity: newCount, price: price, totalPrice: price * newCount });
        return newCount;
      });
    } else {
      setIsInBasket(false);
      removeItem(id);
    }
  };
  
  const addToBasket = () => {
    setIsInBasket(true);
    updateItem({ id, title, quantity: 1, price: price, totalPrice: price });
  };
  
  const handleInputChange = (event: {
    target: {
      value: string;
    };
  }) => {
    const value = event.target.value;
    
    if (value === '') {
      setCount(1);
      return;
    }
    
    let parsedValue = parseInt(value, 10);
    
    if (!isNaN(parsedValue) && parsedValue > 100000) {
      parsedValue = 99999;
    }
    
    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setCount(parsedValue);
      updateItem({ id, title, quantity: parsedValue, price: price, totalPrice: price * parsedValue });
    }
  };
  
  return (
    <>
      <Card
        image_url={image_url}
        title={title}
        id={id}
        description={description}
        price={price}
        count={count}
        increase={increase}
        decrease={decrease}
        handleInputChange={handleInputChange}
        isInBasket={isInBasket}
        handleToBasket={addToBasket}
      />
    </>
  );
};