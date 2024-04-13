import React, { useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(1);
  
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  
  const decrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  
  const handleInputChange = (event: { target: { value: string; }; }) => {
    const value = event.target.value;
    
    if (value === '') {
      setCount(1);
      return;
    }
    
    const parsedValue = parseInt(value, 10);
    
    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setCount(parsedValue);
    }
  };
  
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={decrease}>-</button>
      <input
        className={styles.input}
        min='1'
        value={count}
        onChange={handleInputChange}
      />
      <button className={styles.button} onClick={increase}>+</button>
    </div>
  );
};
