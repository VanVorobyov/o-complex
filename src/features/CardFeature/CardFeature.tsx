import React, { FC, useState, useEffect } from 'react';
import { Card } from '@/entities/Card/Card';
import { ICard } from '@/entities/Card/types';

export const CardFeature: FC<ICard> = ({
  id = 0,
  image_url = '',
  title = '',
  description = '',
  price = 0
}) => {
  
  const [count, setCount] = useState(1);
  const [isInBasket, setIsInBasket] = useState(false);
  
  useEffect(() => {
    const savedCount = localStorage.getItem(`count-${id}`);
    const savedIsInBasket = localStorage.getItem(`isInBasket-${id}`);
    
    if (savedCount) {
      setCount(Number(savedCount));
    }
    
    if (savedIsInBasket) {
      setIsInBasket(savedIsInBasket === 'true');
    }
  }, [id]);
  
  const increase = () => {
    if (count < 99999) {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        localStorage.setItem(`count-${id}`, newCount.toString());
        return newCount;
      });
    }
  };
  
  const decrease = () => {
    if (count > 1) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        localStorage.setItem(`count-${id}`, newCount.toString());
        return newCount;
      });
    } else {
      setIsInBasket(false);
      localStorage.setItem(`isInBasket-${id}`, 'false');
    }
  };
  
  const addToBasket = () => {
    setIsInBasket(true);
    localStorage.setItem(`isInBasket-${id}`, 'true');
  };
  
  const handleInputChange = (event: { target: { value: string; }; }) => {
    const value = event.target.value;
    
    if (value === '') {
      setCount(1);
      localStorage.setItem(`count-${id}`, '1');
      return;
    }
    
    let parsedValue = parseInt(value, 10);
    
    if (!isNaN(parsedValue) && parsedValue > 100000) {
      parsedValue = 99999;
    }
    
    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setCount(parsedValue);
      localStorage.setItem(`count-${id}`, parsedValue.toString());
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